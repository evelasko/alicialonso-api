import { ApolloServer } from 'apollo-server-express'
import express, { Request, Response, NextFunction } from 'express'
import session from 'express-session'
import proxy from 'http-proxy-middleware'
import hbs from 'express-handlebars'
import { webHookMailgun, authRoutes } from './routes'
import { redisClient, RedisStore } from '../libs'
import { redisSessionPrefix, authBaseRoute } from '../constants'
import { AAxError } from '../helpers'
import schema from '../schema'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import { arena } from './middleware/arena.mw'
import cors from './cors'
import context from './context'
const app = express()

// server
export const server = new ApolloServer({
    schema,
    context,
    playground: true
})

// session setup
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

// voyager route
app.use('/gqlmap', voyagerMiddleware({ endpointUrl: 'http://localhost:4000/gql' }))
// arena route
app.use('/queues', arena)
// coverage route
app.use('/coverage', express.static('coverage/lcov-report'))

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

server.applyMiddleware({ app, path: '/gql', cors })

export default app
