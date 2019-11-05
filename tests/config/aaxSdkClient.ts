import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../../api/aaxapi-sdk'

export const endpoint = 'http://localhost:4000/gql'
export const aaxapiSdk = getSdk(new GraphQLClient(endpoint))
