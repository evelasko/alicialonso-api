import { sign, verify } from 'jsonwebtoken'
import R from 'ramda'

import { LoginPayload } from '../../types'

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

/**
 * Decode an authorization login token
 * @param {string} token
 * @return {LoginPayload | null} { id, isAdmin, group, email } | formatted AAxError
 */
export function decodeLoginToken(token: string): LoginPayload | null {
    const decoded = verify(token, secret)
    return decoded && R.has('id')(decoded) ? (decoded as LoginPayload) : null
}
