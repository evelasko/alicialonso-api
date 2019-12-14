import { ExpressContext } from 'apollo-server-express/src/ApolloServer'
import { Request } from 'express'
import { has } from 'ramda'

import { Context, LoginPayload } from '@aatypes'
import { Photon } from '@prisma/photon'

import { redisInstance } from '../cache/redis.handler'
import { decodeLoginToken } from '../security/token.handler'

const photon = new Photon()

// TODO Authentication thru JWT
// authentication by login token
export const resolveAuthToken = async (headers: Request['headers']): Promise<LoginPayload | null> =>
    headers && has('auth')(headers) ? decodeLoginToken(headers.auth as string) : null

// TODO Authentication thru device ID
export const resolveDeviceToken = async (headers: Request['headers']): Promise<LoginPayload | null> => {
    const user: LoginPayload | null = await photon.devices
        .findOne({ where: { id: headers.device as string } })
        .owner({ select: { id: true, isAdmin: true, group: true, email: true } })
    return user && has('email')(user) ? user : null
}

export const contextAuth = async ({ headers, session }: Request): Promise<LoginPayload | null> => {
    // athentication by session cookie
    return session && has('user')(session) ? session.user : null // (await resolveAuthToken(headers)) || (await resolveDeviceToken(headers))
}

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

export const setContextShieldCache = <T>(context: Context) => (key: string, value: T): T | null =>
    // eslint-disable-next-line functional/immutable-data
    value ? Object.assign(context, { shieldCache: { [key]: value } }).shieldCache[key] : null
