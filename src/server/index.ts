import compress from 'compression'
/* eslint-disable functional/no-expression-statement */
import express from 'express'
import hbs from 'express-handlebars'
import proxy from 'http-proxy-middleware'
import methodOverride from 'method-override'

import { authBaseRoute } from '@constants'

import { arena, cors, server, session, voyager } from './config'
import { errorHandlingMiddleware } from './middleware'
import { authRoutes, webHookMailgun } from './routes'

const app = express()

// performance config
app.use(compress({}))
app.use(methodOverride())

// session setup
app.use(session)

// system routes
app.use('/wh/mailgun', webHookMailgun)
app.use(authBaseRoute, authRoutes)

// system info routes
app.use('/gqlmap', voyager)
app.use('/queues', arena)
app.use('/coverage', express.static('coverage/lcov-report'))

// mobile routes proxy
app.enable('trust proxy')
app.use(
    '/mobile',
    proxy({
        target: process.env.HOST || 'http://localhost:4000',
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
server.applyMiddleware({ app, path: '/', cors })

export default app

export * from './config'
export * from './middleware'
export * from './routes'
