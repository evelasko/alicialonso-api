import { shield, and } from 'graphql-shield'
import * as rules from './rules'
import * as validationRules from './validation'

const permissions = shield(
    {
        Query: {
            me: rules.isAuthenticatedUser
        },
        Mutation: {
            signUpUser: and(validationRules.signUpValidationRule, rules.emailNotRegistered),
            login: rules.credentialsCheck,
            requestResetPassword: rules.emailRegistered,
            changePassword: and(validationRules.validNewPassword, rules.keyExists),
            createGroupRequest: and(validationRules.groupRequestValidationRule, rules.isAuthenticatedUser),
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

export default permissions
