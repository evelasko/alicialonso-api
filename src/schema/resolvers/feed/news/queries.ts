// import { stringArg, idArg, extendType } from 'nexus'
// import { Context } from '../../../types'

// export const NewsQuery = extendType({
//     type: 'Query',
//     definition(t) {
//         t.list.field('feed', {
//             type: 'News',
//             resolve: (parent, args, { prisma }: Context) => {
//                 return prisma.newses({
//                     where: { status: 'PUBLISHED' }
//                 })
//             }
//         })

//         t.list.field('filterNews', {
//             type: 'News',
//             args: {
//                 searchString: stringArg({ nullable: true })
//             },
//             resolve: (parent, { searchString }, { prisma }: Context) => {
//                 return prisma.newses({
//                     where: {
//                         OR: [
//                             { title_contains: searchString },
//                             { subtitle_contains: searchString },
//                             { body_contains: searchString }
//                         ]
//                     }
//                 })
//             }
//         })

//         t.field('news', {
//             type: 'News',
//             nullable: true,
//             args: { id: idArg() },
//             resolve: (parent, { id }, { prisma }: Context) => {
//                 return prisma.news({ id })
//             }
//         })
//     }
// })
