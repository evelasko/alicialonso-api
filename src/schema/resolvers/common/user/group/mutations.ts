import { stringArg, arg, mutationField } from 'nexus'
import { notifyNewGroupRequest, processGroupRequest, AAxError } from '@helpers'
import { errorMessages } from '@constants'

export const CreateGroupRequest = mutationField('createGroupRequest', {
    type: 'AuthPayload',
    args: {
        groupRequest: arg({ type: 'UserGroup', nullable: false })
    },
    resolve: async (parent, { groupRequest }, { user, photon }) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        await photon.users.update({ where: { email: user.email }, data: { groupRequest } })
        await notifyNewGroupRequest(user.email)
        photon.disconnect()
        return { token: 'done' }
    }
})

export const ApproveGroupRequest = mutationField('approveGroupRequest', {
    type: 'AuthPayload',
    args: {
        email: stringArg({ required: true })
    },
    resolve: async (parent, { email }, { user }) => {
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
    resolve: async (parent, { email }, { user }) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        const response = await processGroupRequest('reject', email, user.email)
        if (response instanceof AAxError) {
            throw response
        }
        return { token: 'done' }
    }
})
