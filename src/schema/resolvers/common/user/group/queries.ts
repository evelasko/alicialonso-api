// import { extendType } from 'nexus'
// import { Context } from '../../../../types'

// export const GetAllGroupRequests = extendType({
//     type: 'Query',
//     definition(t) {
//         t.field('me', {
//             type: 'User',
//             resolve: (parent, args, {prisma, session}:Context) => {
//                 const {userId} = session
//                 return prisma.user({ id: userId })
//             },
//         })
//     },
// })
