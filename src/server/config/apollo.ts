import { ApolloServer } from 'apollo-server-express'

import { context } from '@helpers'
import schema from '@schema'

export const server = new ApolloServer({
    schema,
    context,
    playground: true
})
