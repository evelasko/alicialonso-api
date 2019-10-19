import Redis from 'ioredis'
import { Request, Response } from 'express'
// import {Express} from 'express-session'
// FIXTHIS Implement Photon
import { Prisma, UserGroup } from '../generated/client/prisma'

export interface Context {
    prisma: Prisma
    request: Request
    response?: Response
    session?: Request['session']
    user: LoginPayload | null
    redis?: Redis.Redis
    url?: string
    aaxCache: object
}

export type LoginPayload = {
    id: string
    isAdmin: boolean
    group: UserGroup
    email: string
}

export interface UserCache {
    id: string
    email: string
    hpassword: string
    isAdmin: boolean
    group: UserGroup
}
