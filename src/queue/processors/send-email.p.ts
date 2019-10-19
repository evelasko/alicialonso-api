import { sendEmail } from '../../helpers'
import { Job } from 'bull'
// TODO JSDoc
/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { to, subject, text } = job.data
    await sendEmail(to, subject, text, job.data.templateFileName || null, job.data.context || {})
}
