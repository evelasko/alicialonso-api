import path from 'path'
import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { applyMiddleware } from 'graphql-middleware'
import * as types from './resolvers'
import permissions from '../permissions'

let schema = makeSchema({
    types,
    // true,
    outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../types/generated/nexus-typegen.ts')
    },
    plugins: [nexusPrismaPlugin()],
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@generated/photon',
                alias: 'photon'
            },
            {
                source: require.resolve('../types/context'),
                alias: 'Context'
            }
        ]
    },
    // Configure nullability of input arguments / output results
    nonNullDefaults: {
        input: true,
        output: true
    }
})

schema = applyMiddleware(schema, permissions)
export default schema

if (process.env.NODE_ENV === 'nexus') {
    setInterval(() => {
        process.exit()
    }, 10500)
}
