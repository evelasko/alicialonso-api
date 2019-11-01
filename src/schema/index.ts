import path from 'path'
import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './resolvers'

const schema = makeSchema({
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

export default schema

// if (process.env.NODE_ENV === 'nexus') {
//     setInterval(() => {
//         console.log('schema: ', schema)
//         // process.exit()
//     }, 1500)
// }
