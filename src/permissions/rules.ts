import { v4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { rule } from 'graphql-shield'
import { Context } from '@aatypes'
// FIXTHIS implement Photon
import { User } from '../generated/client/prisma'
import { sendVerificationEmail } from '@helpers'
import { emailVerificationPrefix, errorMessages } from '@constants'
import { redisInstance } from '@libs'

// TODO stop using prisma from context in rules so that you can leverage the args cache of graphqlshield
export const isAuthenticatedUser = rule({ cache: 'contextual' })(async (parent, args, { user }: Context) =>
    user ? true : errorMessages.s_loginRequired
)
// TODO isAdmin may only be present when authenticated so this rule can be used for both cases
export const isAdminUser = rule({ cache: 'contextual' })((parent, args, { user }: Context) =>
    user && user.isAdmin ? true : errorMessages.s_adminPrivilegesRequired
)

export const emailNotRegistered = rule({ cache: 'strict' })(async (parent, { email }, { prisma }: Context) =>
    !(await prisma.user({ email }).firstname()) ? true : errorMessages.d_emailAlreadyRegistered(email)
)

export const emailRegistered = rule({ cache: 'strict' })(async (parent, { email }, { prisma }: Context) =>
    (await prisma.user({ email }).firstname()) ? true : errorMessages.d_emailNotRegistered(email)
)

export const credentialsCheck = rule({ cache: 'strict' })(async (parent, { email, password }, { prisma }: Context) => {
    const user: User = await prisma.user({ email }).$fragment(`{ id, password, emailVerified }`)
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

export const groupRequestPending = rule({ cache: 'strict' })(async (parent, { email }, { prisma }: Context) =>
    (await prisma.user({ email }).groupRequest()) ? true : errorMessages.s_groupRequestNotFound
)
