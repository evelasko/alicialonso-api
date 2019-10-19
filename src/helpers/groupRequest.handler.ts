// FIXME implement Photon
import { prisma } from '../generated/client/prisma'
import { AAxError } from './error.handler'
import { errorMessages } from '@constants'
import { sendQueuedEmail } from './email.handler'
import { processEncryptedEmail } from './crypto.handler'

/**
 * Process (approve or reject) a Group Request if exists
 * @param {('approve' | 'reject')} action the action to process the group request
 * @param {string} emailOrUserSignature the email address (or encrypted email address) of the requestee
 * @param {string} emailOrAdminSignature the email address (or encrypted email address) of the admin processing the request
 * @return {(Promise<string | AAxError>)} returns 'done' or a formatted AAxError
 */
export async function processGroupRequest(
    action: 'approve' | 'reject',
    emailOrUserSignature: string,
    emailOrAdminSignature: string
): Promise<string | AAxError> {
    try {
        const email = processEncryptedEmail(emailOrUserSignature)
        if (email) {
            const groupRequest = await prisma.user({ email }).groupRequest()
            if (!groupRequest) {
                return new AAxError(
                    `no groupRequest of user found`,
                    'RejectGroupRequestRoute',
                    errorMessages.s_groupRequestNotFound,
                    false
                )
            }
            switch (action) {
                case 'approve':
                    try {
                        // process approval
                        await prisma.updateUser({
                            where: { email },
                            data: { group: groupRequest, groupRequest: null }
                        })
                        // notify user
                        // TODO design template for group request approval
                        await sendQueuedEmail({
                            to: email,
                            subject: 'Confirmación solicitud de grupo',
                            text: `Tu solicitud de formar parte del grupo ${groupRequest} ha sido aprobada.`,
                            templateFileName: null,
                            context: {}
                        })
                        // TODO add a log entry setting the ACTION, the MODIFIER user (admin), and the MODIFIED user (public user)
                        console.log(`${emailOrAdminSignature} was the one approving the request`)
                        return 'done'
                    } catch (err) {
                        return new AAxError(
                            `some error ocurred in try/catch block: ${err}`,
                            'processGroupRequest:approve',
                            errorMessages.d_groupRequestProcessFailed,
                            true
                        )
                    }
                case 'reject':
                    try {
                        // delete the request
                        await prisma.updateUser({
                            where: { email },
                            data: { groupRequest: null }
                        })
                        // notify user
                        // TODO design template for group request rejection
                        await sendQueuedEmail({
                            to: email,
                            subject: 'Rechazada solicitud de grupo',
                            text: `Hemos rechazado tu solicitud de formar parte del grupo ${groupRequest}, si crees que es un error por favor comunícanoslo respondiendo a este email`,
                            templateFileName: null,
                            context: {}
                        })
                        // TODO add a log entry setting the ACTION, the MODIFIER user (admin), and the MODIFIED user (public user)
                        console.log(`${emailOrAdminSignature} was the one rejecting the request`)
                        return 'done'
                    } catch (err) {
                        return new AAxError(
                            `some error ocurred in try/catch block: ${err}`,
                            'processGroupRequest:reject',
                            errorMessages.d_groupRequestProcessFailed,
                            true
                        )
                    }
                default:
                    return new AAxError(
                        `the switch statement failed to make a choice`,
                        'processGroupRequest:switch statement default',
                        errorMessages.d_groupRequestProcessFailed,
                        true
                    )
            }
        } else {
            return new AAxError(
                `got no email address from caller function`,
                'RejectGroupRequestRoute',
                errorMessages.s_groupRequestNotFound,
                false
            )
        }
    } catch (err) {
        if (err instanceof AAxError) return err
        return new AAxError(
            `unknown error: ${err}`,
            'RejectGroupRequestRoute',
            errorMessages.s_groupRequestNotFound,
            false
        )
    }
}
