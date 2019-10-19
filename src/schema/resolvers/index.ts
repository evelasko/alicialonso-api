// FIXTHIS Implement new nexus-prisma
import { prismaObjectType } from 'nexus-prisma'

export * from './common/user/authentication/mutations'
export * from './common/user/authentication/queries'
export * from './common/user/authentication/types'
export * from './common/user/authentication/enums'

export * from './common/user/group/mutations'

export * from './feed/news/mutations'
export * from './feed/news/queries'

// @ts-ignore
export const Query = prismaObjectType({
    name: 'Query',
    definition(t) {
        t.prismaFields(['*'])
    }
})

export const Mutation = prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['*'])
    }
})
