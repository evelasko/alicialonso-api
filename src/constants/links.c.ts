import { encryptString } from '../helpers'
import { authApproveGroupRequest, authBaseRoute, authConfirmationRoute, authRejectGroupRequestRoute } from './routes.c'

export const links = {
    emailVerification: (key: string): string => `${process.env.HOST}${authBaseRoute}${authConfirmationRoute}/${key}`,
    approveGroupRequest: (userEmail: string, adminEmail: string): string =>
        `${process.env.HOST}${authBaseRoute}${authApproveGroupRequest}/${encryptString(userEmail)}/${encryptString(
            adminEmail
        )}`,
    rejectGroupRequest: (userEmail: string, adminEmail: string): string =>
        `${process.env.HOST}${authBaseRoute}${authRejectGroupRequestRoute}/${encryptString(userEmail)}/${encryptString(
            adminEmail
        )}`,
    resetPassword: (key: string): string => `${key}`
}
