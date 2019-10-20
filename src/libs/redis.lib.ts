import connectRedis from 'connect-redis'
import redis from 'redis'
import Redis from 'ioredis'
import session from 'express-session'

export const RedisStore = connectRedis(session)
export const redisInstance = new Redis(process.env.REDIS_URL as string)
export const redisContextInstance = new Redis(process.env.REDIS_URL as string)
export const redisClient = redis.createClient({
    url: process.env.REDIS_URL as string
})
