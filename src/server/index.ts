import express, { Request, Response, NextFunction } from 'express'
import proxy from 'http-proxy-middleware'
import hbs from 'express-handlebars'
import { webHookMailgun, authRoutes } from './routes'
import { authBaseRoute } from '@constants'
import { AAxError } from '@helpers'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import { arena } from './middleware/arena.mw'
import cors from './cors'
import session from './session'
import server from './apollo'

const app = express()

// session setup
app.use(session)

// routes
app.use('/wh/mailgun', webHookMailgun)
app.use(authBaseRoute, authRoutes)

// info routes
app.use('/gqlmap', voyagerMiddleware({ endpointUrl: 'http://localhost:4000/gql' }))
app.use('/queues', arena)
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

// apollo hook
server.applyMiddleware({ app, path: '/gql', cors })

export default app
