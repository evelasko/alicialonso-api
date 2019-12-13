import { errorMessages, links } from '@constants'

const key = 'wrglwrhnwxfgniuwfnx'
const email1 = 'email@address1.com'
const email2 = 'email@address2.com'
const email = 'some@mail.com'

describe('Core constants tests', () => {
    test('should return custom message including provided email', () => {
        const m1 = errorMessages.d_emailAlreadyRegistered(email)
        expect(m1).toBeTruthy()
        const m2 = errorMessages.d_emailNotRegistered(email)
        expect(m2.includes(email)).toBeTruthy()
        const m3 = errorMessages.d_accountLocked(email)
        expect(m3.includes(email)).toBeTruthy()
        const m4 = errorMessages.d_errorSendingEmailTo(email)
        expect(m4.includes(email)).toBeTruthy()
        const m5 = errorMessages.d_emailNotVerified(email)
        expect(m5.includes(email)).toBeTruthy()
    })
    test('should return links including provided strings', () => {
        const l1 = links.emailVerification(key)
        expect(l1).toBeTruthy()
        const l2 = links.approveGroupRequest(email1, email2)
        expect(l2).toBeTruthy()
        const l3 = links.rejectGroupRequest(email1, email2)
        expect(l3).toBeTruthy()
        const l4 = links.resetPassword(key)
        expect(l4.includes(key)).toBeTruthy()
    })
})
