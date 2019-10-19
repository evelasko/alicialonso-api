import { queryField } from 'nexus'
// FIXTHIS Implement Photon
import { User } from '../../../../generated/client/prisma'
import { Context } from '@aatypes'

export const UserQuery = queryField('me', {
    type: 'User',
    resolve: async (parent, args, { prisma, user }: Context) => {
        if (!user) throw new Error('authentication required')
        const { id } = user
        const response: User | null = await prisma.user({ id })
        if (!response) throw new Error('user not found')
        return response
    }
})
