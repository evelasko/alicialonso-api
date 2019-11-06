import express from 'express'
import proxy from 'http-proxy-middleware'
import hbs from 'express-handlebars'
import { webHookMailgun, authRoutes } from './routes'
import { authBaseRoute } from '@constants'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'
import cors from './cors'
import session from './session'
import server from './apollo'
import { arena, errorHandlingMiddleware } from './middleware'
const app = express()

// session setup
app.use(session)

// system routes
app.use('/wh/mailgun', webHookMailgun)
app.use(authBaseRoute, authRoutes)

// system info routes
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

// default html renderer
app.set('views', 'src/server/views/')
app.engine('.hbs', hbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

// error handler middleware
app.use(errorHandlingMiddleware)

// apollo middleware
server.applyMiddleware({ app, path: '/gql', cors })

export default app
