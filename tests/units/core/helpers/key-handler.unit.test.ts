import {
    generateResetPasswordKey,
    generateVerificationKey,
    getKeyNature
} from '../../../../src/helpers'

import {
    resetPasswordPrefix,
    emailVerificationPrefix
} from '../../../../src/constants'

describe('keys handler helper functions tests', () => {
    test('should generate an email verification key', () => {
        const ResetPasswordKey = generateResetPasswordKey()
        expect(getKeyNature(ResetPasswordKey)).toBe(resetPasswordPrefix)
    })
    test('should generate a reset password key', () => {
        const VerificationKey = generateVerificationKey()
        expect(getKeyNature(VerificationKey)).toBe(emailVerificationPrefix)
    })
})
