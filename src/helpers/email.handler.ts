import { Job } from 'bull'
import { Mailgun } from '../libs'
import { AAxError, renderTemplateHTML } from '.'
import { emailQueue } from '../queue'

/**
 * Send a transactional email from info@alicialonso.org
 * @param {string | string[]} to recipient or recipients array addresses receiving the email
 * @param {string} subject subject text
 * @param {string} text text message to fallback when html is not provided or unabled to be rendered
 * @param {string?} [templateFileName] the hbs template file name located at src/server/views
 * @param {object?} [context] object with all variables required to render the hbs template file
 */
export async function sendEmail(
    to: string | string[],
    subject: string,
    text: string,
    templateFileName?: string | null,
    context?: object
): Promise<void> {
    try {
        await Mailgun.sendMail({
            to,
            from: process.env.SENDER_TRANSACTIONAL as string,
            subject,
            text,
            html: templateFileName && context ? await renderTemplateHTML(templateFileName, context) : ''
        })
    } catch (err) {
        throw new AAxError(
            `Error while attempting to send the following email:
            To: ${to}
            Subject: ${subject}
            Text: ${text}
            Template: ${templateFileName}`,
            'sendEmail()',
            'Ha ocurrido un error al intentar enviar el email',
            false
        )
    }
}

/**
 * Email arguments object
 *
 * @type EmailArgs
 * @property {string | string[]} to recipient or recipients addresses array
 * @property {string} subject subject test of the email
 * @property {string} text the text to fallback if no html template file provided
 * @property {string} [template] the hbs template file name relative to path src/server/views
 * @property {object} [context] the object with variables needed to render the template
 * @property {object} [data] additional variables to process the email or the template file
 */
export type EmailArgs = {
    to: string | string[]
    subject: string
    text: string
    templateFileName?: string | null
    context?: object
    data?: object
}

/**
 * Creates a queue job to send email
 * @param {EmailArgs} emailArgs email arguments object: { to, subject, text,   }
 * @return {Promise<Job>} the queue job created
 */
export async function sendQueuedEmail(emailArgs: EmailArgs): Promise<Job> {
    const job: Job = await emailQueue.add('sendEmail', { ...emailArgs })
    return job
}

/**
 * Creates a queue job to send generic notification email to admins
 * overrides anything in the to property of emailArgs with the addresses
 * of the system's admins
 * @param {EmailArgs} emailArgs
 * @return {Promise<Job>}
 */
export async function notifyAdmins(emailArgs: EmailArgs): Promise<Job> {
    const job: Job = await emailQueue.add('notifyAdmins', { ...emailArgs })
    return job
}

/**
 * Notify admins about a new group request
 * @param {string} userEmail the email of the user that created the group request
 * @return {Promise<Job>}
 */
export async function notifyNewGroupRequest(userEmail: string): Promise<Job> {
    const job: Job = await emailQueue.add('notifyNewGroupRequest', { userEmail })
    return job
}

/**
 * Sends an email address verification email to the address
 * @param {string} to the email address to verify
 * @param {string} key the verification key stored in the database for this email address
 * @return {Promise<Job>}
 */
export async function sendVerificationEmail(to: string, key: string): Promise<Job> {
    const job: Job = await emailQueue.add('sendVerificationEmail', { to, key })
    return job
}

/**
 * Sends a password reset email to the specified email address
 * @param {string} to the email address of the user that requested the reset
 * @param {string} key the reset key stored in the database for this reset request
 * @return {Promise<Job>}
 */
export async function sendPasswordResetEmail(to: string, key: string): Promise<Job> {
    const job: Job = await emailQueue.add('sendPasswordResetEmail', { to, key })
    return job
}
