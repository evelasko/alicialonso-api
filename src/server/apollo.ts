import { ApolloServer } from 'apollo-server-express'
import context from './context'
import schema from '../schema'

const server = new ApolloServer({
    schema,
    context,
    playground: true
})

export default server
