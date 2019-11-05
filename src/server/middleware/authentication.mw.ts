import { Request } from 'express'
import { Photon } from '@generated/photon'
import { AAxError, decodeLoginToken } from '../../helpers'
import { LoginPayload } from '../../types'

const photon = new Photon()

/**
 * Authentication middleware performed while processing resolvers context upon new request
 * @export
 * @param {Request} Request Request: { headers }
 * @return {(Promise<LoginPayload | null>)} Return object with user info or null if auth fails
 */
export default async ({ headers }: Request): Promise<LoginPayload | null> => {
    // TODO finish implementation of cookie authentication
    // athentication by session cookie
    // if (Object.prototype.hasOwnProperty.call(session, 'userId')) {
    //     return true
    // }
    // TODO this requires cache control

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
