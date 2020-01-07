import { rule } from 'graphql-shield'
import { propOr } from 'ramda'

import { errorMessages } from '@constants'
import { redisInstance, userCredentialsCheck } from '@helpers'
import { UserGroup } from '@prisma/photon'

import { setContextShieldCache } from '../server/config'
import { Context } from '../types'

export const isAuthenticatedUser = rule({ cache: 'contextual' })(async (parent, args, { user }) =>
    user ? true : errorMessages.s_loginRequired
)

export const isAdminUser = rule({ cache: 'contextual' })((parent, args, { user }) =>
    user && user.isAdmin ? true : errorMessages.s_adminPrivilegesRequired
)

export const emailNotRegistered = rule({ cache: 'strict' })(async (parent, { email }, { photon }) =>
    !(await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailAlreadyRegistered(email)
)

export const emailRegistered = rule({
    cache: 'strict'
})(async (parent, { email }, { photon }: Context) =>
    (await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailNotRegistered(email)
)

/**
 * Performs the following checks returning the corresponding error message of true if cleared:
 * (1) returned user must not be null
 * (2) password must not be '*' (locked account)
 * (3) emailVerified must be true
 * (4) passwords must match
 */
export const credentialsCheck = rule({ cache: 'strict' })(
    async (parent, { email, password }, { photon }: Context) =>
        userCredentialsCheck(
            password,
            await photon.users.findOne({
                where: { email },
                select: { password: true, emailVerified: true }
            })
        )(email)
)

export const keyExists = rule({ cache: 'strict' })(async (parent, { key }, context) =>
    (await redisInstance.get(key)) !== undefined ? true : errorMessages.s_invalidCodeProvided
)

export const groupRequestPending = rule({
    cache: 'strict'
})(async (parent, { email }, context: Context) =>
    setContextShieldCache<{ groupRequest: UserGroup | null } | null>(context)(
        'groupRequest',
        propOr(
            null,
            'groupRequest',
            await context.photon.users.findOne({ where: { email }, select: { groupRequest: true } })
        )
    )
        ? true
        : errorMessages.s_groupRequestNotFound
)

export const shieldCacheCheck = rule()(async (parent, { msg }, context: Context) =>
    setContextShieldCache<string | undefined>(context)('msg', msg)
        ? true
        : 'shieldCache received nothing to store...'
)
