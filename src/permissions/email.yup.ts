import yup from 'yup'
import { errorMessages } from '../constants'

export const emailArgValidator = yup.object().shape({
    to: yup
        .string()
        .email(errorMessages.s_invalidEmail)
        .required(),
    subject: yup.string().required(),
    text: yup.string().required(),
    templateFileName: yup.string().notRequired(),
    context: yup.object().notRequired(),
    data: yup.object().notRequired()
})
