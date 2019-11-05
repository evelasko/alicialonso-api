import { stringArg, arg, mutationField } from 'nexus'
import { errorMessages } from '@constants'
import { processGroupRequest, createGroupRequest } from '@core'

export const CreateGroupRequest = mutationField('createGroupRequest', {
    type: 'AuthPayload',
    args: {
        groupRequest: arg({ type: 'UserGroup', nullable: false })
    },
    resolve: async (parent, { groupRequest }, { user }) => {
        if (!user) throw new Error(errorMessages.s_loginRequired)
        const response = await createGroupRequest(user.email, groupRequest)
        return { token: response }
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
        return { token: response }
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
        return { token: response }
    }
})
