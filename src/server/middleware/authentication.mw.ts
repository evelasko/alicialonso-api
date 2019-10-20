import { Request } from 'express'
import { Photon } from '@generated/photon'
import { AAxError, decodeLoginToken } from '@helpers'
import { LoginPayload } from '@aatypes'

const photon = new Photon()

// TODO JSDoc
/**
 *
 *
 * @export
 * @param {Request} { headers, session }
 * @return {(Promise<LoginPayload | null>)}
 */
export default async ({ headers }: Request): Promise<LoginPayload | null> => {
    // TODO finish implementation of cookie authentication
    // athentication by session cookie
    // if (Object.prototype.hasOwnProperty.call(session, 'userId')) {
    //     return true
    // }

    // authentication by login token
    if (Object.prototype.hasOwnProperty.call(headers, 'auth')) {
        const user: AAxError | LoginPayload = await decodeLoginToken(headers.auth as string)
        if (!(user instanceof AAxError) && Object.prototype.hasOwnProperty.call(user, 'id')) {
            return user
        }
    }
    // authentication by device id
    if (Object.prototype.hasOwnProperty.call(headers, 'device')) {
        const user: LoginPayload = await photon.devices
            .findOne({ where: { id: headers.device as string } })
            .owner({ select: { id: true, isAdmin: true, group: true, email: true } })

        if (user) return user
    }
    photon.disconnect()
    return null
}
