import { Request } from 'express'
import { Context, LoginPayload } from '@aatypes'
import { redisInstance, photon } from '@libs'
import { AAxError, decodeLoginToken } from '@helpers'

const contextAuth = async ({ headers, session }: Request): Promise<LoginPayload | null> => {
    // athentication by session cookie
    if (session && Object.prototype.hasOwnProperty.call(session, 'user')) {
        return session.user
    }

    // authentication by login token
    if (Object.prototype.hasOwnProperty.call(headers, 'auth')) {
        const user: AAxError | LoginPayload = await decodeLoginToken(headers.auth as string)
        if (!(user instanceof AAxError) && Object.prototype.hasOwnProperty.call(user, 'id')) {
            if (Object.prototype.hasOwnProperty.call(user, 'iat')) delete user.iat
            if (Object.prototype.hasOwnProperty.call(user, 'exp')) delete user.exp
            return user
        }
    }
    // authentication by device id
    if (Object.prototype.hasOwnProperty.call(headers, 'device')) {
        const user: LoginPayload | null = await photon.devices
            .findOne({ where: { id: headers.device as string } })
            .owner({ select: { id: true, isAdmin: true, group: true, email: true } })

        if (user) return user
    }
    return null
}

const context = async ({ req }: { req: Request }): Promise<Context> => ({
    photon,
    request: req,
    redis: redisInstance,
    aaxCache: {},
    user: await contextAuth(req),
    session: req && req.session,
    url: req ? `${req.protocol}://${req.get('host')}` : ''
})

export default context
