import { Request } from 'express'
import Redis from 'ioredis'

import { Photon, UserGroup } from '@prisma/photon'

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

export type LoginPayload = {
    readonly id: string
    readonly isAdmin: boolean
    readonly group: UserGroup
    readonly email: string
}
