/* eslint-disable functional/no-throw-statement */
/* eslint-disable functional/no-conditional-statement */
import { queryField } from 'nexus'

import { User } from '@prisma/photon'

export const UserQuery = queryField('me', {
    type: 'User',
    description: 'Query data of the currently authenticated user',
    resolve: async (parent, args, { photon, user }) => {
        if (!user) throw new Error('authentication required')
        const { email } = user
        const response: User | null = await photon.users.findOne({ where: { email } })
        if (!response) throw new Error('user not found')
        return response
    }
})
