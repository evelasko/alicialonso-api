import { Job } from 'bull'
// FIXTHIS Implememnt Photon
import { getAdminEmails } from '../../../utils/prismaQueries'
import { prisma, User } from '../../../generated/client/prisma'
import { sendEmail } from '../../helpers'
import { links } from '../../constants'
// TODO JSDoc

/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { userEmail } = job.data

    const adminEmails = await getAdminEmails()
    const { firstname, lastname, groupRequest }: User = await prisma
        .user({ email: userEmail })
        .$fragment(`{ firstname lastname groupRequest }`)

    // TODO design email template for new group request admin notification
    adminEmails.forEach(async (adminEmail: string) => {
        await sendEmail(
            adminEmail,
            'Nueva solicitud de inclusión en grupo',
            `Le informamos que ${firstname} ${lastname} ha solicitado le inclusión al grupo ${groupRequest}`,
            'email.hbs',
            {
                groupRequest,
                approveLink: links.approveGroupRequest(userEmail, adminEmail),
                rejectLink: links.rejectGroupRequest(userEmail, adminEmail)
            }
        )
    })
}
