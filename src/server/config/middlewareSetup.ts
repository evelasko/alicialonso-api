import { GlobalAcceptMimesMiddleware, ServerLoader } from '@tsed/common'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import compress from 'compression'
import methodOverride from 'method-override'
import proxy from 'http-proxy-middleware'
import express from 'express'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import session from './session'
import { arena } from '../middlewares'
import server from './apollo'
import cors from './cors'

export const beforeRoutesInitMiddleware = (tsed: ServerLoader): void => {
    tsed.use(GlobalAcceptMimesMiddleware)
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
        // mobile proxy
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
        .use('/gqlmap', voyagerMiddleware({ endpointUrl: 'http://localhost:4000/gql' }))
        .use('/arena', arena)
        .use('/coverage', express.static('coverage/lcov-report'))
}
export const beforeListenMiddleware = (tsed: ServerLoader): void => {
    server.applyMiddleware({ path: '/gql', app: tsed.expressApp, cors })
    if (tsed.httpServer || tsed.httpsServer) {
        server.installSubscriptionHandlers(tsed.httpServer || tsed.httpsServer)
    }
}
