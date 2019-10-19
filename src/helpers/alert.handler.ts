import { Mailgun } from '@libs'

/**
 * Send an error alert via email to process.env.RECIPIENT_WEBMASTER
 * @param {string} subject  the subject of the error alert
 * @param {string} text the body of the alrt including the error thrown
 */
export async function alertWebmaster(subject: string, text: string): Promise<void> {
    Mailgun.sendMail(
        {
            from: process.env.SENDER_WEBMASTER as string,
            to: process.env.RECIPIENT_WEBMASTER as string,
            subject,
            text
        },
        (err, info) => {
            if (err) {
                throw new Error(
                    `@alertWebmaster()\nFailed to send error notification email:\nSubject:${subject}\nText:${text}`
                )
            }
            if (info) {
                return info
            }
        }
    )
}
