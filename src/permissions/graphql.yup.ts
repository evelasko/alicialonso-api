import { inputRule } from 'graphql-shield'
import { InputRule } from 'graphql-shield/dist/rules'
import { Shape } from 'yup'

import { errorMessages } from '../constants'

export const signUpValidationRule: InputRule<Shape<
    object,
    {
        email: string
        password: string
        firstname: string
        lastname: string
    }
>> = inputRule('signUpIputs')(yup =>
    yup.object().shape({
        email: yup
            .string()
            .min(3)
            .max(255)
            .email(errorMessages.s_invalidEmail),
        password: yup
            .string()
            .min(8, errorMessages.s_passwordTooShort)
            .max(100, errorMessages.s_passwordTooLong),
        firstname: yup
            .string()
            .min(2, errorMessages.s_firstnameTooShort)
            .max(100, errorMessages.s_firstnameTooLong),
        lastname: yup
            .string()
            .min(2, errorMessages.s_lastnameTooShort)
            .max(255, errorMessages.s_lastnameTooLong)
    })
)

export const groupRequestValidationRule: InputRule<Shape<
    object,
    {
        groupRequest: string
    }
>> = inputRule('groupRequestInputs')(yup =>
    yup.object().shape({
        groupRequest: yup.string().oneOf(['STUDENT', 'STAFF'], errorMessages.s_groupRequestNotNeeded)
    })
)

export const validNewPassword: InputRule<Shape<object, { newPassword: string }>> = inputRule('newPasswordInput')(yup =>
    yup.object().shape({
        newPassword: yup
            .string()
            .min(8, errorMessages.s_passwordTooShort)
            .max(100, errorMessages.s_passwordTooLong)
    })
)
