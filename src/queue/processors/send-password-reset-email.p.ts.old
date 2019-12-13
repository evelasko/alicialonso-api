import { Job } from 'bull'
import { sendEmail } from '../../helpers/email.handler'
import { links } from '../../constants'
import { setPasswordResetKey } from '../../helpers'
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

    await setPasswordResetKey(key, to)
    await sendEmail(
        to,
        'Solicitud de restablecimiento de contraseña',
        `Has solicitado restablecer tu contraseña y tu cuenta ha quedado bloqueada hasta que emitas una nueva, para ello por favor sige el enlace a continuación: `,
        'emailConfirmation.hbs',
        {
            confirmation_link: links.resetPassword(key)
        }
    )
}
