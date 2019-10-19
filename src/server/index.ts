import express, { Request, Response, NextFunction } from 'express'
import session from 'express-session'
import { GraphQLServer } from 'graphql-yoga'
import proxy from 'http-proxy-middleware'
import hbs from 'express-handlebars'
import { webHookMailgun, authBaseRoute, authRoutes } from './routes'
import { redisInstance, redisClient, RedisStore } from '@libs'
import { redisSessionPrefix } from '@constants'
// FIXTHIS Implememnt Photon
import { prisma } from '../generated/client/prisma'
import permissions from '@permissions'
import { Context } from '@aatypes'
import { AAxError } from '@helpers'
import schema from '@schema'
import authMiddleware from './middleware/authentication.mw'

// graphql server
const server = new GraphQLServer({
    // @ts-ignore
    schema,
    middlewares: [permissions],
    context: async ({ request, response }): Promise<Context> => ({
        prisma,
        request,
        response,
        redis: redisInstance,
        aaxCache: {},
        user: await authMiddleware(request),
        session: request && request.session,
        url: request ? `${request.protocol}://${request.get('host')}` : ''
    })
})

server.express.use(
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
server.express.use('/wh/mailgun', webHookMailgun)
server.express.use(authBaseRoute, authRoutes)
server.express.use('/images', express.static('images'))
server.express.use('/resources', express.static('resources'))

// mobile routes proxy
server.express.enable('trust proxy')
server.express.use(
    '/mobile',
    proxy({
        target: process.env.HOST,
        changeOrigin: true,
        pathRewrite: { '/mobile': '' }
    })
)

// html renderer
server.express.set('views', 'src/server/views/')
server.express.engine('.hbs', hbs({ extname: '.hbs' }))
server.express.set('view engine', '.hbs')

// error handler middleware
server.express.use((err: Error | AAxError, req: Request, res: Response, next: NextFunction) => {
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

export default server
