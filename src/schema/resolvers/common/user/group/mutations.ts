import { stringArg, arg, mutationField } from 'nexus'
import { Context } from '@aatypes'
import { notifyNewGroupRequest, processGroupRequest, AAxError } from '@helpers'
import { errorMessages } from '@constants'

export const CreateGroupRequest = mutationField('createGroupRequest', {
    type: 'AuthPayload',
    args: {
        groupRequest: arg({ type: 'UserGroup', nullable: false })
    },
    resolve: async (
        parent,
        { groupRequest },
        // TODO the following line implies that there is a cookie and the session is set,
        // but what if authentication was made by token or deviceId?
        { prisma, user }: Context
    ) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        await prisma.updateUser({ where: { email: user.email }, data: { groupRequest } })

        await notifyNewGroupRequest(user.email)
        return { token: 'done' }
    }
})

export const ApproveGroupRequest = mutationField('approveGroupRequest', {
    type: 'AuthPayload',
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { user }: Context) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        const response = await processGroupRequest('approve', email, user.email)
        if (response instanceof AAxError) {
            throw response
        }
        return { token: 'done' }
    }
})

export const RejectGroupRequest = mutationField('rejectGroupRequest', {
    type: 'AuthPayload',
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { user }: Context) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        const response = await processGroupRequest('reject', email, user.email)
        if (response instanceof AAxError) {
            throw response
        }
        return { token: 'done' }
    }
})
