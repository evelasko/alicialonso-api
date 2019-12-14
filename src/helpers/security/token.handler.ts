import { sign, verify } from 'jsonwebtoken'
import { always, is, tryCatch, where } from 'ramda'

import { LoginPayload } from '../../types'

const secret = process.env.JWT_SECRET as string

/**
 * Generates a login authorization token
 * @param {LoginPayload} loginPayload { id, isAdmin, group, email }
 * @return {Promise<string>} the token string
 */
export const generateLoginToken = (loginPayload: LoginPayload): string | null =>
    tryCatch(payload => sign(payload, secret, { expiresIn: '3h' }), always(null))(loginPayload)

export const LoginPayloadPredicate = where({
    id: is(String),
    isAdmin: is(Boolean),
    group: is(String),
    email: is(String)
})

/**
 * Decode an authorization login token
 * @param {string} token
 * @return {LoginPayload | null} { id, isAdmin, group, email } | formatted AAxError
 */
export const decodeLoginToken = (token: string | null): LoginPayload | null =>
    token
        ? tryCatch(k => {
              const d = verify(k, secret)
              return LoginPayloadPredicate(d) ? (d as LoginPayload) : null
          }, always(null))(token)
        : null
