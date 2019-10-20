import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../../api/aaxapi-sdk'

export const endpoint = 'http://localhost:5000'
export const aaxapiSdk = getSdk(new GraphQLClient(endpoint))
