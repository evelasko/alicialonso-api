import { ApolloServer } from 'apollo-server-express'
import express, { Request, Response, NextFunction } from 'express'
import session from 'express-session'
// import { GraphQLServer } from 'graphql-yoga'
import proxy from 'http-proxy-middleware'
import hbs from 'express-handlebars'
import { webHookMailgun, authBaseRoute, authRoutes } from './routes'
import { redisInstance, redisClient, RedisStore } from '@libs'
import { redisSessionPrefix } from '@constants'
import { Photon } from '@generated/photon'
// import permissions from '@permissions'
import { Context } from '@aatypes'
import { AAxError } from '@helpers'
import schema from '@schema'
import authMiddleware from './middleware/authentication.mw'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import { arena } from './middleware/arena.mw'
import cors from './cors'

const photon = new Photon()

const server = new ApolloServer({
    schema,
    context: async ({ req }): Promise<Context> => ({
        photon,
        request: req,
        redis: redisInstance,
        aaxCache: {},
        user: await authMiddleware(req),
        session: req && req.session,
        url: req ? `${req.protocol}://${req.get('host')}` : ''
    }),
    engine: {
        apiKey: process.env.ENGINE_API_KEY as string
    }
})

// const server = new GraphQLServer({
//     // @ts-ignore
//     schema,
//     middlewares: [permissions],
//     context: async ({ request, response }): Promise<Context> => ({
//         photon,
//         request,
//         response,
//         redis: redisInstance,
//         aaxCache: {},
//         user: await authMiddleware(request),
//         session: request && request.session,
//         url: request ? `${request.protocol}://${request.get('host')}` : ''
//     })
// })

const app = express()

app.use(
    session({
        store: new RedisStore({
            client: redisClient,
            prefix: redisSessionPrefix
        }),
        name: 'aaxid',
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
        }
    })
)

// routes
app.use('/wh/mailgun', webHookMailgun)
app.use(authBaseRoute, authRoutes)
app.use('/images', express.static('images'))
app.use('/resources', express.static('resources'))

// voyager route
app.use('/gqlmap', voyagerMiddleware({ endpointUrl: 'http://localhost:4000' }))
// arena route
app.use('/queues', arena)

// mobile routes proxy
app.enable('trust proxy')
app.use(
    '/mobile',
    proxy({
        target: process.env.HOST,
        changeOrigin: true,
        pathRewrite: { '/mobile': '' }
    })
)

// html renderer
app.set('views', 'src/server/views/')
app.engine('.hbs', hbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// error handler middleware
app.use((err: Error | AAxError, req: Request, res: Response, next: NextFunction) => {
    // console.log('AAxERROR:', err)
    if (err instanceof AAxError) {
        res.status(500).render('pages/error', {
            layout: false,
            userMessage: err.userMessage
        })
        return
    }
    res.status(500).send(err.message)
    next(err)
})

server.applyMiddleware({ app, path: '/', cors })

export default app
