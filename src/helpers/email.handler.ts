import { Job } from 'bull'
import MailgunTransport from 'mailgun-nodemailer-transport'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { emailQueue } from '../queue'
import { hbsFromFile } from './'

export const Mailgun: Mail = nodemailer.createTransport(
    new MailgunTransport({
        auth: {
            apiKey: process.env.MAILGUN_API_KEY as string,
            domain: process.env.MAILGUN_DOMAIN as string
        }
    })
)

/**
 * Send a transactional email from info@alicialonso.org
 * @param {string | string[]} to recipient or recipients array addresses receiving the email
 * @param {string} subject subject text
 * @param {string} text text message to fallback when html is not provided or unabled to be rendered
 * @param {string?} [templateFileName] the hbs template file name located at src/server/views
 * @param {object?} [context] object with all variables required to render the hbs template file
 */
export const sendEmail = async <T>(
    to: string | string[],
    subject: string,
    text: string,
    templateFileName?: string | null,
    context?: T
): Promise<object> =>
    await Mailgun.sendMail({
        to,
        from: process.env.SENDER_TRANSACTIONAL as string,
        subject,
        text,
        html: templateFileName && context ? hbsFromFile(templateFileName)<T>(context) : ''
    })

/**
 * Email arguments object
 *
 * @type EmailArgs<C, D> C: type for context, D: type for data
 * @property {string | string[]} to recipient or recipients addresses array
 * @property {string} subject subject test of the email
 * @property {string} text the text to fallback if no html template file provided
 * @property {string} [template] the hbs template file name relative to path src/server/views
 * @property {object} [context] the object with variables needed to render the template
 * @property {object} [data] additional variables to process the email or the template file
 */
export type EmailArgs<C, D> = {
    to: string | string[]
    subject: string
    text: string
    templateFileName?: string | null
    context?: C
    data?: D
}

/**
 * Creates a queue job to send email
 * @param {EmailArgs} emailArgs email arguments object: { to, subject, text,   }
 * @return {Promise<Job>} the queue job created
 */
export async function sendQueuedEmail<C, D>(emailArgs: EmailArgs<C, D>): Promise<Job> {
    const job: Job = await emailQueue.add('sendEmail', {
        ...emailArgs,
        from: process.env.SENDER_TRANSACTIONAL as string
    })
    return job
}
