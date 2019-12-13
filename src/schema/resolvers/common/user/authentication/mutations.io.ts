/* eslint-disable functional/no-conditional-statement */
import bcrypt from 'bcryptjs'
/* eslint-disable functional/immutable-data */
import { arg, mutationField, stringArg } from 'nexus'

import { LoginPayload } from '@aatypes'
import { generateResetPasswordKey, generateVerificationKey } from '@constants'
import { generateLoginToken, redisInstance } from '@helpers'

// TODO move all resolver functions to @core/auth.core.ts
// TODO add logout mutation

export const SignUpUser = mutationField('signUpUser', {
    type: 'AuthPayload',
    description: `Signs up a new user.
                  Returns the token required to verify its email account.`,
    args: {
        firstname: stringArg({ required: true }),
        lastname: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
        groupRequest: arg({ type: 'UserGroup', required: false })
    },
    resolve: async (parent, args, { photon }) => {
        args.password = await bcrypt.hash(args.password, 8)
        await photon.users.create({ data: { ...args } })

        const { groupRequest } = args

        // process group request if present
        if (groupRequest && groupRequest !== 'GENERAL') {
            // await notifyNewGroupRequest(email)
        }
        return { token: generateVerificationKey() }
    }
})

export const Login = mutationField('login', {
    type: 'AuthPayload',
    description: `Login a registered user.
                  Returns the token required for authentication.`,
    args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { session, photon }) => {
        // retreive user's data
        const user: LoginPayload | null = await photon.users.findOne({
            where: { email },
            select: { id: true, isAdmin: true, group: true, email: true }
        })
        if (!user) {
            return { token: '#' }
        }
        if (session) session.user = user

        return { token: await generateLoginToken(user) }
    }
})

export const RequestResetPassword = mutationField('requestResetPassword', {
    type: 'AuthPayload',
    description: `Creates a reset password request, locks the account requested, and sends an email to the requestee with a link to create a new password.
                  Returns the key to restore the password.`,
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { photon }) => {
        // lock account
        await photon.users.update({ where: { email }, data: { password: '*' } })
        return { token: generateResetPasswordKey() }
    }
})

export const ChangePassword = mutationField('changePassword', {
    type: 'AuthPayload',
    description: `Changes the password of the account whose reset request matches the provided key.`,
    args: {
        key: stringArg({ required: true }),
        newPassword: stringArg({ required: true })
    },
    resolve: async (parent, { key, newPassword }, { photon }) => {
        await photon.users.update({
            where: { email: await redisInstance.get(key) },
            data: { password: await bcrypt.hash(newPassword, 8) }
        })
        return { token: 'ok' }
    }
})
