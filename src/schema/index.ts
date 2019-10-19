import * as path from 'path'
// FIXTHIS Implement new nexus-prisma
import { makePrismaSchema } from 'nexus-prisma'
import datamodelInfo from '../generated/client/nexus'
import { prisma } from '../generated/client/prisma'
import * as allTypes from './resolvers'

const schema = makePrismaSchema({
    // Code implemented Graphql
    types: allTypes,

    // interface to Prisma
    prisma: {
        datamodelInfo,
        client: prisma
    },

    // Nexus generated files output
    outputs: {
        schema: path.join(__dirname, '../generated/schema/nexus-schema.graphql'),
        typegen: path.join(__dirname, '../generated/schema/nexus-typings.ts')
    },

    // Configure nullability of input arguments
    nonNullDefaults: {
        input: true,
        output: true
    },

    // Configure automatic type resolution for the TS representation of the associated types
    typegenAutoConfig: {
        sources: [
            {
                source: path.join(__dirname, '../types/index.ts'),
                alias: 'types'
            }
        ],
        contextType: 'types.Context'
    }
})

export default schema
