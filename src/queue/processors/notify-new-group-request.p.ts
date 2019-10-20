import { Job } from 'bull'
import { Photon } from '@generated/photon'
import { sendEmail, getAdminEmails } from '@helpers'
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
    const photon = new Photon()
    const { userEmail } = job.data

    const adminEmails = await getAdminEmails()
    const { firstname, lastname, groupRequest } = await photon.users.findOne({
        where: { email: userEmail },
        select: { firstname: true, lastname: true, groupRequest: true }
    })

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
