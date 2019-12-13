import { express } from 'graphql-voyager/middleware'

export const voyager = express({ endpointUrl: 'http://localhost:4000/gql' })
