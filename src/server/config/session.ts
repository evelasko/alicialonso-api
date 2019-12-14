// import connectRedis from 'connect-redis'
import session from 'express-session'

import { redisSessionName, redisSessionPrefix } from '@constants'
import { redisClient } from '@helpers'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const redisStore = require('connect-redis')(session)
// const RedisStore = connectRedis(session)

export const sess = session({
    store: new redisStore({
        client: redisClient,
        prefix: redisSessionPrefix
    }),
    name: redisSessionName(),
    secret: (process.env.SESSION_SECRET as string) || 'testSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
})
