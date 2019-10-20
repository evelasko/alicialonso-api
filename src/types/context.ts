import Redis from 'ioredis'
import { Request, Response } from 'express'
import { Photon, UserGroup } from '@generated/photon'
import authMiddleware from '../server/middleware/authentication.mw'
import { redisContextInstance } from 'libs'
import { ContextCallback } from 'graphql-yoga/dist/types'

const photon = new Photon()

export type Context = {
    photon: Photon
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

export const createContext: ContextCallback = async ({ request, response }): Promise<Context> => ({
    photon,
    request,
    response,
    redis: redisContextInstance,
    aaxCache: {},
    user: await authMiddleware(request),
    session: request && request.session,
    url: request ? `${request.protocol}://${request.get('host')}` : ''
})
