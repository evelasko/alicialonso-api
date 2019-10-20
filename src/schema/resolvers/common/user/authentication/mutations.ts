import { stringArg, arg, mutationField } from 'nexus'
import bcrypt from 'bcryptjs'
import { sendVerificationEmail, notifyNewGroupRequest, sendPasswordResetEmail, generateLoginToken } from '@helpers'
import { generateVerificationKey, generateResetPasswordKey } from '@constants'
import { LoginPayload } from '@aatypes'
import { redisInstance } from '@libs'

export const SignUpUser = mutationField('signUpUser', {
    type: 'AuthPayload',
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

        const { email, groupRequest } = args

        const key = generateVerificationKey()
        await sendVerificationEmail(email, key)

        // process group request if present
        if (groupRequest && groupRequest !== 'GENERAL') {
            await notifyNewGroupRequest(email)
        }
        return { token: key }
    }
})

export const Login = mutationField('login', {
    type: 'AuthPayload',
    args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { photon }) => {
        // retreive user's data
        const user: LoginPayload = await photon.users.findOne({
            where: { email },
            select: { id: true, isAdmin: true, group: true, email: true }
        })
        if (!user) {
            return { token: '#' }
        }

        // TODO initialize session
        // const { id, isAdmin, group } = user
        // session.userId = id
        // session.isAdmin = isAdmin
        // session.group = group
        return {
            token: await generateLoginToken(user)
        }
    }
})

export const RequestResetPassword = mutationField('requestResetPassword', {
    type: 'AuthPayload',
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { photon }) => {
        // send reset password email with link to reset password
        const key = generateResetPasswordKey()
        await sendPasswordResetEmail(key, email)

        // lock account
        await photon.users.update({ where: { email }, data: { password: '*' } })
        return { token: key }
    }
})

export const ChangePassword = mutationField('changePassword', {
    type: 'AuthPayload',
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
