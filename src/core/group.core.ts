import { isEmail } from 'validator'
import { UserUpdateInput } from '@generated/photon'
import { photon } from '@libs'
import { AAxError, sendQueuedEmail, processEncryptedEmail, notifyNewGroupRequest } from '../helpers'
import { errorMessages } from '../constants'

/**
 * Creates a new group request by setting groupRequest's
 * user property to the one requested
 * @param {string} userEmail
 * @param {NexusArgDef<'UserGroup'>} groupRequest
 * @return {(Promise<string>)}
 */
export async function createGroupRequest(
    userEmail: string,
    groupRequest: UserUpdateInput['groupRequest']
): Promise<string> {
    try {
        await photon.connect()
        await photon.users.update({ where: { email: userEmail }, data: { groupRequest } })
        await notifyNewGroupRequest(userEmail)
        return 'done'
    } catch (err) {
        throw new AAxError(
            'Something happened while creating a group request',
            'createGroupRequest@group.core',
            errorMessages.g_UnknownServerError,
            false
        )
    } finally {
        // await photon.disconnect()
    }
}

/**
 * Process (approve or reject) a Group Request if exists
 * @param {('approve' | 'reject')} action the action to process the group request
 * @param {string} emailOrUserSignature the email address (or encrypted email address) of the requestee
 * @param {string} emailOrAdminSignature the email address (or encrypted email address) of the admin processing the request
 * @return {(Promise<string>)} returns 'done' if no errors
 */
export async function processGroupRequest(
    action: 'approve' | 'reject',
    emailOrUserSignature: string,
    emailOrAdminSignature: string
): Promise<string> {
    try {
        await photon.connect()
        const email = processEncryptedEmail(emailOrUserSignature)
        if (email && isEmail(email)) {
            const user = await photon.users.findOne({ where: { email }, select: { groupRequest: true } })
            if (!user) {
                throw new AAxError(
                    `no user found for provided email`,
                    'RejectGroupRequestRoute',
                    errorMessages.s_groupRequestNotFound,
                    false
                )
            }
            const { groupRequest } = user
            if (!groupRequest) {
                throw new AAxError(
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
                        await photon.users.update({
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
                        // photon.disconnect()
                        return 'done'
                    } catch (err) {
                        throw new AAxError(
                            `some error ocurred in try/catch block: ${err}`,
                            'processGroupRequest:approve',
                            errorMessages.d_groupRequestProcessFailed,
                            true
                        )
                    }
                case 'reject':
                    try {
                        // delete the request
                        await photon.users.update({
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
                        // photon.disconnect()
                        throw new AAxError(
                            `some error ocurred in try/catch block: ${err}`,
                            'processGroupRequest:reject',
                            errorMessages.d_groupRequestProcessFailed,
                            true
                        )
                    }
                default:
                    // photon.disconnect()
                    throw new AAxError(
                        `the switch statement failed to make a choice`,
                        'processGroupRequest:switch statement default',
                        errorMessages.d_groupRequestProcessFailed,
                        true
                    )
            }
        } else {
            throw new AAxError(
                `got no email address from caller function or email is invalid`,
                'RejectGroupRequestRoute',
                errorMessages.s_groupRequestNotFound,
                false
            )
        }
    } catch (err) {
        throw err
    }
}
