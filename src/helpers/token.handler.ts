import { sign, verify } from 'jsonwebtoken'
import { AAxError } from './error.handler'
import { errorMessages } from '../constants'
import { LoginPayload } from '../types'

const secret = process.env.JWT_SECRET as string

/**
 * Generates a login authorization token
 * @param {LoginPayload} loginPayload { id, isAdmin, group, email }
 * @return {Promise<string>} the token string
 */
export async function generateLoginToken(loginPayload: LoginPayload): Promise<string> {
    const token = sign(loginPayload, secret, { expiresIn: '3h' })
    return token
}

export const resolveJWTError = (err: Error): AAxError => {
    return new AAxError(
        `ERROR: ${err || 'Unknown'}`,
        `decode[Reset|Login]Token()`,
        // eslint-disable-next-line no-nested-ternary
        Object.prototype.hasOwnProperty.call(err, 'message')
            ? err.message === 'jwt expired'
                ? errorMessages.s_invalidCodeExpired
                : errorMessages.s_invalidCodeProvided
            : errorMessages.s_invalidCodeProvided,
        false
    )
}

/**
 * Decode an authorization login token
 * @param {string} token
 * @return {(Promise<LoginPayload | AAxError>)} { id, isAdmin, group, email } | formatted AAxError
 */
export async function decodeLoginToken(token: string): Promise<LoginPayload | AAxError> {
    try {
        const decoded = await verify(token, secret)
        if (Object.prototype.hasOwnProperty.call(decoded, 'id')) {
            return decoded as LoginPayload
        }
        return resolveJWTError({
            name: 'Error decoding token',
            message: 'decoded token not valid: id, isAdmin and group properties are missin'
        })
    } catch (err) {
        return resolveJWTError(err)
    }
}
