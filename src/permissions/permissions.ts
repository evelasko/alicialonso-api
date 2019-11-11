import { shield, and } from 'graphql-shield'
import * as rules from './rules'
import * as validationRules from './graphql.yup'

export const permissions = shield(
    {
        Query: {
            me: rules.isAuthenticatedUser
        },
        Mutation: {
            signUpUser: and(validationRules.signUpValidationRule, rules.emailNotRegistered),
            login: rules.credentialsCheck,
            requestResetPassword: rules.emailRegistered,
            changePassword: and(validationRules.validNewPassword, rules.keyExists),
            createGroupRequest: and(rules.isAuthenticatedUser, validationRules.groupRequestValidationRule),
            approveGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            rejectGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            createSpace: rules.isAdminUser,
            createVenue: rules.isAdminUser
        }
    },
    {
        allowExternalErrors: true
    }
)
