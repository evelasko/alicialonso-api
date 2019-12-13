import { applyMiddleware } from 'graphql-middleware'
import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import path from 'path'

import permissions from '@permissions'

import * as types from './resolvers'

const preSchema = makeSchema({
    types,
    // @ts-ignore
    plugins: [nexusPrismaPlugin()],
    outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../types/generated/nexus-typegen.ts')
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/photon',
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

const schema = applyMiddleware(preSchema, permissions)

export default schema
