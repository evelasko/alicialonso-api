import { v4 } from 'uuid'
import { encryptString, decryptString, processEncryptedEmail } from '../../src/helpers'

describe('Data encryption functions', () => {
    test('should encrypt and decrypt a string', () => {
        const testString = v4()
        const encryptedString = encryptString(testString)
        expect(testString).not.toBe(encryptedString)
        const decryptedString = decryptString(encryptedString)
        expect(decryptedString).toBe(testString)
    })
    test('should return same email address if provided', () => {
        const email = 'some@mail.com'
        const res = processEncryptedEmail(email)
        expect(res).toBe(email)
    })
    test('should return email address if encrypted email provided', () => {
        const email = 'some@mail.com'
        const encryptedEmail = encryptString(email)
        const decryptedEmail = processEncryptedEmail(encryptedEmail)
        expect(decryptedEmail).toBe(email)
    })
    test('should return null if decrypted string is not an email address', () => {
        const encryptedString = encryptString('thisisnotanemailaddress')
        const res = processEncryptedEmail(encryptedString)
        expect(res).toBe(null)
    })
})
