import bcrypt from 'bcryptjs'

import { errorMessages } from '@constants'
import { userCredentialsCheck } from '@helpers'

describe('Conditions', () => {
    test('check for user credentials', () => {
        const email = 'p@t.com'
        const pwd = '1234567'
        const password = bcrypt.hashSync(pwd)
        const userUndefined = null
        const userLocked = { password: '*', emailVerified: true }
        const userUnverified = { password, emailVerified: false }
        const userVerified = { password, emailVerified: true }
        expect(userCredentialsCheck(pwd, userUndefined)(email)).toBe(errorMessages.d_emailNotRegistered(email))
        expect(userCredentialsCheck(pwd, userLocked)(email)).toBe(errorMessages.d_accountLocked(email))
        expect(userCredentialsCheck(pwd, userUnverified)(email)).toBe(errorMessages.d_emailNotVerified(email))
        expect(userCredentialsCheck(pwd, userVerified)(email)).toBe(true)
    })
})