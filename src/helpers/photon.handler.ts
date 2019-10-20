import { Photon } from '@generated/photon'

const photon = new Photon()

export const getAdminEmails = async (): Promise<string[]> => {
    photon.connect()
    const emails = await photon.users.findMany({ where: { isAdmin: true }, select: { email: true } })
    photon.disconnect()
    return emails.map(({ email }) => email)
}
