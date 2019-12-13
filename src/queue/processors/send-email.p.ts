import { Job } from 'bull'

import { sendEmail } from '../../helpers'

// TODO JSDoc
/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function({ data: { to, text, subject, templateFileName, context } }: Job): Promise<object> {
    return await sendEmail(to, subject, text, templateFileName || null, context || {})
}
