import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compress from 'compression'
import methodOverride from 'method-override'
import proxy from 'http-proxy-middleware'
import session from './middlewares/session'
import path from 'path'
import server from './apollo'
import cors from './cors'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import { arena } from './middlewares'
import express from 'express'

export const rootDir = path.resolve(__dirname)
export const port = (process.env.PORT as string) || 3000
@ServerSettings({
    rootDir,
    acceptMimes: ['application/json', 'urlencoded'],
    port,
    componentsScan: [`${rootDir}/middlewares/*.ts`, `${rootDir}/services/*.ts`],
    mount: { '/': `${rootDir}/controllers/v0/*.ts` }
})
/**
 * Main Ts.ED Server Class
 * @class Server
 * @extends {ServerLoader} Ts.ED
 */
export class Server extends ServerLoader {
    /** Apply all server middlewares required before initializing routes
     * @memberof Server
     */
    public $beforeRoutesInit(): void {
        this.use(GlobalAcceptMimesMiddleware)
            .use(session)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(
                bodyParser.urlencoded({
                    extended: true
                })
            )
            .use(
                '/mobile',
                proxy({
                    target: process.env.HOST,
                    changeOrigin: true,
                    pathRewrite: { '/mobile': '' }
                })
            )
        // system info routes
        // TODO the enpoint of graphqlvoyager requires schema introspection and it is now available in production...
        this.use('/gqlmap', voyagerMiddleware({ endpointUrl: 'http://localhost:4000/gql' }))
        this.use('/arena', arena)
        this.use('/coverage', express.static('coverage/lcov-report'))
    }

    /**
     * Apply all server middleware required after initializing routes
     * @memberof Server
     */
    public $beforeListen(): void {
        server.applyMiddleware({ path: '/gql', app: this.expressApp, cors })
        if (this.httpServer || this.httpsServer) {
            server.installSubscriptionHandlers(this.httpServer || this.httpsServer)
        }
    }
}
