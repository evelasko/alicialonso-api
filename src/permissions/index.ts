import { and, shield } from 'graphql-shield'

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
            // createGroupRequest: and(rules.isAuthenticatedUser, validationRules.groupRequestValidationRule),
            // approveGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            // rejectGroupRequest: and(rules.isAdminUser, rules.groupRequestPending),
            createSpace: rules.isAdminUser,
            createVenue: rules.isAdminUser,
            createSocialNetwork: rules.isAdminUser,
            addAddress: rules.isAuthenticatedUser,
            updateAddress: rules.isAuthenticatedUser
        }
    },
    {
        allowExternalErrors: true
    }
)

export default permissions
