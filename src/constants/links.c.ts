import { authBaseRoute, authConfirmationRoute, authApproveGroupRequest, authRejectGroupRequestRoute } from './routes.c'
import { encryptString } from '../helpers'

export const links = {
    emailVerification: (key: string): string => `${process.env.HOST}${authBaseRoute}${authConfirmationRoute}/${key}`,
    approveGroupRequest: (userEmail: string, adminEmail: string): string =>
        // eslint-disable-next-line prettier/prettier
        `${process.env.HOST}${authBaseRoute}${authApproveGroupRequest}/${encryptString(userEmail)}/${encryptString(adminEmail)}`,
    rejectGroupRequest: (userEmail: string, adminEmail: string): string =>
        // eslint-disable-next-line prettier/prettier
        `${process.env.HOST}${authBaseRoute}${authRejectGroupRequestRoute}/${encryptString(userEmail)}/${encryptString(adminEmail)}`,
    resetPassword: (key: string): string => `${key}`
}
