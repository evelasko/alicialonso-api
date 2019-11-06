import session from 'express-session'
import { redisClient, RedisStore } from '@libs'
import { redisSessionPrefix, redisSessionName } from '@constants'

export default session({
    store: new RedisStore({
        client: redisClient,
        prefix: redisSessionPrefix
    }),
    name: redisSessionName(),
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
})
