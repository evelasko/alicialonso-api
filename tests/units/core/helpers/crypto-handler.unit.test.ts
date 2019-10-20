import { v4 } from 'uuid'
import { encryptString, decryptString } from '../../../../src/helpers'

describe('Data encryption functions', () => {
    test('should encrypt and decrypt a string', () => {
        const testString = v4()
        const encryptedString = encryptString(testString)
        expect(testString).not.toBe(encryptedString)
        const decryptedString = decryptString(encryptedString)
        expect(decryptedString).toBe(testString)
    })
})
