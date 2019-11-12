import { Request } from 'express'
import { Photon } from '@generated/photon'
import { AAxError, decodeLoginToken } from '../../helpers'
import { LoginPayload } from '../../types'

const photon = new Photon()

/**
 * Authentication middleware performed before processing resolvers context upon new request.
 * Permissions skips auth check if user:LoginPayload is present and valid in context:Context
 * @param {Request} Request Request: { headers, session }
 * @return {(Promise<LoginPayload | null>)} LoginPayload or null if auth fails
 */
export const authMiddleware = async ({ headers, session }: Request): Promise<LoginPayload | null> => {
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
