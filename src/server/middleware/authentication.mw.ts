import { Request } from 'express'
import { prisma } from '../../generated/client/prisma'
import { AAxError, decodeLoginToken } from '@helpers'
import { LoginPayload } from '@aatypes'
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
        const user: LoginPayload = await prisma
            .device({ id: headers.device as string })
            .owner()
            .$fragment(`{ id isAdmin group email }`)
        if (user) return user
    }
    return null
}
