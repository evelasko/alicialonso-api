import { arg, mutationField, stringArg } from 'nexus'
import { prop } from 'ramda'

// import { errorMessages } from '@constants'
// import { processGroupRequest } from '@core'

// export const CreateGroupRequest = mutationField('createGroupRequest', {
//     type: 'User',
//     args: {
//         groupRequest: arg({ type: 'UserGroup', nullable: false })
//     },
//     resolve: async (parent, { groupRequest }, { photon, user }) =>
//         await photon.users.update({ where: { email: user.email }, data: { groupRequest } })
// })

// export const ApproveGroupRequest = mutationField('approveGroupRequest', {
//     type: 'User',
//     args: {
//         email: stringArg({ required: true })
//     },
//     resolve: async (parent, { email }, { photon, user }) =>
//         await photon.users.update({
//             where: { email },
//             data: {
//                 group: await photon.users.findOne({ where: { email }, select: { groupRequest: true } }),
//                 groupRequest: null
//             }
//         })
// })

// export const RejectGroupRequest = mutationField('rejectGroupRequest', {
//     type: 'User',
//     args: {
//         email: stringArg({ required: true })
//     },
//     resolve: async (parent, { email }, { photon, user }) => {
//         await photon.users.findOne()
//         if (!user) throw new Error(errorMessages.s_loginRequired)
//         const response = await processGroupRequest('reject', email, user.email)
//         return { token: response }
//     }
// })

export const Shield = mutationField('shield', {
    type: 'AuthPayload',
    args: {
        msg: stringArg({ required: true })
    },
    resolve: async (parent, args, { shieldCache }) => {
        console.log(shieldCache)
        return {
            token: shieldCache
                ? `Taken from context: ${shieldCache.msg ? shieldCache.msg : 'nothing'}`
                : 'sorry...'
        }
    }
})
