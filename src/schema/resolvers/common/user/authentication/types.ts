/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
// FIXTHIS Implement new nexus-prisma
import { objectType } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

export const AuthPayload = objectType({
    name: 'AuthPayload',
    description: 'Authorization payload data',
    definition(t) {
        t.string('token', { nullable: false })
    }
})

// @ts-ignore
export const User = prismaObjectType({
    name: 'User',
    definition(t) {
        t.prismaFields(['*']),
            t.string('fullname', {
                resolve: ({ firstname, lastname }) => `${firstname} ${lastname}`
            })
    }
})
