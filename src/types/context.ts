import { ExpressContext } from 'apollo-server-express/src/ApolloServer'
import { Request } from 'express'
import Redis from 'ioredis'

import { contextAuth, redisInstance } from '@helpers'
import { Photon, UserGroup } from '@prisma/photon'

export type LoginPayload = {
    readonly id: string
    readonly isAdmin: boolean
    readonly group: UserGroup
    readonly email: string
}

export type Context = {
    readonly photon: Photon
    readonly request: Request
    readonly session?: Request['session']
    readonly user: LoginPayload | null
    readonly redis?: Redis.Redis
    readonly url?: string
    readonly aaxCache: object
    shieldCache?: { [key: string]: string }
}

const photon = new Photon()

// eslint-disable-next-line functional/prefer-readonly-type
export const context = async ({ req }: ExpressContext): Promise<Context> => ({
    photon,
    request: req,
    redis: redisInstance,
    aaxCache: {},
    user: await contextAuth(req),
    session: req && req.session,
    url: req ? `${req.protocol}://${req.get('host')}` : ''
})
