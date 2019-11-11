import { Job } from 'bull'
import { sendEmail, encryptString, getAdminEmails } from '../../helpers'

/**
 * Queue processor function to notify admins via email
 *
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { subject, text, template, context } = job.data

    const adminEmails = await getAdminEmails()

    adminEmails.forEach(async (email: string) => {
        // add encrypted admin email to context as adminSignature
        const signedContext = {
            ...context,
            adminSignature: encryptString(email)
        }
        // send generic notification to admins
        // TODO design generic template for admin notifications
        await sendEmail(email, subject, text, template || '', signedContext)
    })
}
