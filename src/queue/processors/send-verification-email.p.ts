import { Job } from 'bull'
import { sendEmail } from '../../helpers/email.handler'
import { links } from '../../constants'
import { setVerificationKey } from '../../helpers'
// TODO JSDoc

/**
 *
 *
 * @export
 * @param {Job} job
 * @return {Promise<void>}
 */
export default async function(job: Job): Promise<void> {
    const { to, key } = job.data

    await setVerificationKey(key, to)
    await sendEmail(
        to,
        'Bienvenido a Alicialonso.org',
        `Para continuar debes confirmar tu dirección de email a través de este enlace: `,
        'emailConfirmation.hbs',
        {
            confirmation_link: links.emailVerification(key)
        }
    )
}
