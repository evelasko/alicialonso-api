import gql from 'graphql-tag'

export const signUpUser = gql`
    mutation SignUpUser(
        $email: String!
        $password: String!
        $firstname: String!
        $lastname: String!
        $groupRequest: UserGroup = PUBLIC
    ) {
        signUpUser(
            firstname: $firstname
            lastname: $lastname
            email: $email
            password: $password
            groupRequest: $groupRequest
        ) {
            token
        }
    }
`

export const loginUser = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`

export const requestResetPassword = gql`
    mutation RequestResetPassword($email: String!) {
        requestResetPassword(email: $email) {
            token
        }
    }
`
export const changePassword = gql`
    mutation ChangePassword($newPassword: String!, $key: String!) {
        changePassword(key: $key, newPassword: $newPassword) {
            token
        }
    }
`

export const createGroupRequest = gql`
    mutation CreateGroupRequest($groupRequest: UserGroup!) {
        createGroupRequest(groupRequest: $groupRequest) {
            token
        }
    }
`

export const approveGroupRequest = gql`
    mutation ApproveGroupRequest($email: String!) {
        approveGroupRequest(email: $email) {
            token
        }
    }
`

export const rejectGroupRequest = gql`
    mutation RejectGroupRequest($email: String!) {
        rejectGroupRequest(email: $email) {
            token
        }
    }
`
