// import { stringArg, idArg, extendType, arg } from 'nexus'
// import { Context } from '../../../types'

// export const NewsMutation = extendType({
//     type: 'Mutation',
//     definition(t) {
//         t.field('createNews', {
//             type: 'News',
//             args: {
//                 title: stringArg(),
//                 body: stringArg(),
//                 target: arg({ type: 'UserGroup', nullable: false })
//             },
//             resolve: (parent, { title, body, target }, { user, prisma }: Context) => {
//                 if (!user) throw new Error('authentication required')
//                 const { id } = user
//                 return prisma.createNews({
//                     title,
//                     body,
//                     target,
//                     author: { connect: { id } }
//                 })
//             }
//         })

//         t.field('deleteNews', {
//             type: 'News',
//             nullable: true,
//             args: { id: idArg() },
//             resolve: (parent, { id }, { prisma }: Context) => {
//                 return prisma.deleteNews({ id })
//             }
//         })

//         t.field('publishNews', {
//             type: 'News',
//             nullable: true,
//             args: { id: idArg() },
//             resolve: (parent, { id }, { prisma }: Context) => {
//                 return prisma.updateNews({
//                     where: { id },
//                     data: { status: 'PUBLISHED' }
//                 })
//             }
//         })
//     }
// })
