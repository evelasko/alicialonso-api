// import { photon } from './photon.handler'
import { UserUpdateInput } from '@prisma/photon'

/**
 * Creates a new group request by setting groupRequest's
 * user property to the one requested and notifies
 * @param {string} userEmail
 * @param {NexusArgDef<'UserGroup'>} groupRequest
 * @return {(Promise<string>)}
 */
export async function createGroupRequest(
    userEmail: string,
    groupRequest: UserUpdateInput['groupRequest']
): Promise<string> {
    // const user = await photon.users.update({ where: { email: userEmail }, data: { groupRequest } })
    // const job = await sendQueuedEmail({ to: user.email, subject: '', text: '' })
    return '' // job.name
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
    return `${action} - ${emailOrAdminSignature} - ${emailOrUserSignature}`
}

/*
    await photon.connect()
    const email = processEncryptedEmail(emailOrUserSignature)
    if (email && isEmail(email)) {
        const user = await photon.users.findOne({ where: { email }, select: { groupRequest: true } })
        if (!user) {
            return new AAxError(
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
            case 'reject':
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
                    // photon.disconnect()
                    throw new AAxError(
                        `some error ocurred in try/catch block: ${err}`,
                        'processGroupRequest:reject',
                        errorMessages.d_groupRequestProcessFailed,
                        true
                    )
            default:
                // photon.disconnect()
                return new AAxError(
                    `the switch statement failed to make a choice`,
                    'processGroupRequest:switch statement default',
                    errorMessages.d_groupRequestProcessFailed,
                    true
                )
        }
    } else {
        return new AAxError(
            `got no email address from caller function or email is invalid`,
            'RejectGroupRequestRoute',
            errorMessages.s_groupRequestNotFound,
            false
        )
    }
*/
