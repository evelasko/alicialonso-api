import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { rule } from 'graphql-shield'
// FIXTHIS implement Photon
import { sendVerificationEmail } from '@helpers'
import { emailVerificationPrefix, errorMessages } from '@constants'
import { redisInstance } from '@libs'
import { Context } from '@aatypes'

// TODO stop using photon from context in rules so that you can leverage the args cache of graphqlshield
export const isAuthenticatedUser = rule({ cache: 'contextual' })(async (parent, args, { user }) =>
    user ? true : errorMessages.s_loginRequired
)
// TODO isAdmin may only be present when authenticated so this rule can be used for both cases
export const isAdminUser = rule({ cache: 'contextual' })((parent, args, { user }) =>
    user && user.isAdmin ? true : errorMessages.s_adminPrivilegesRequired
)

export const emailNotRegistered = rule({ cache: 'strict' })(async (parent, { email }, { photon }) =>
    !(await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailAlreadyRegistered(email)
)

export const emailRegistered = rule({ cache: 'strict' })(async (parent, { email }, { photon }: Context) =>
    (await photon.users.findOne({ where: { email }, select: { firstname: true } }))
        ? true
        : errorMessages.d_emailNotRegistered(email)
)

export const credentialsCheck = rule({ cache: 'strict' })(async (parent, { email, password }, { photon }: Context) => {
    const user = await photon.users.findOne({
        where: { email },
        select: { id: true, password: true, emailVerified: true }
    })
    if (!user) {
        return errorMessages.d_emailNotRegistered(email)
    }
    if (user.password === '*') {
        return errorMessages.d_accountLocked(email)
    }
    if (!user.emailVerified) {
        try {
            await sendVerificationEmail(email, `${emailVerificationPrefix}${v4()}`)
        } catch (e) {
            return errorMessages.d_errorSendingEmailTo(email)
        }
        return errorMessages.d_emailNotVerified(email)
    }
    if (!(await bcrypt.compare(password, user.password))) {
        return errorMessages.s_passwordMismatch
    }
    return true
})

export const keyExists = rule({ cache: 'strict' })(async (parent, { key }) =>
    (await redisInstance.get(key)) !== undefined ? true : errorMessages.s_invalidCodeProvided
)

export const groupRequestPending = rule({ cache: 'strict' })(async (parent, { email }, { photon }) =>
    (await photon.users.findOne({ where: { email }, select: { groupRequest: true } }))
        ? true
        : errorMessages.s_groupRequestNotFound
)
