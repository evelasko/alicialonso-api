// import connectRedis from 'connect-redis'
import session from 'express-session'
import Redis from 'ioredis'
import redis from 'redis'

import { redisSessionName, redisSessionPrefix } from '@constants'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const redisStore = require('connect-redis')(session)
// const RedisStore = connectRedis(session)
const redisClient = redis.createClient({
    url: process.env.REDIS_URL as string
})
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
