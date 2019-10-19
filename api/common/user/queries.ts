/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag'

export const meQuery = gql`
    query MeQuery {
        me {
            email
            firstname
            lastname
            group
            isAdmin
        }
    }
`
