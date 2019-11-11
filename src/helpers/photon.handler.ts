import { photon } from '@libs'

export const getAdminEmails = async (): Promise<string[]> => {
    const emails = await photon.users.findMany({ where: { isAdmin: true }, select: { email: true } })
    return emails.map(({ email }) => email)
}
