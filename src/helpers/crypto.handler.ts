import { always, cond, T } from 'ramda'
import SimpleCrypto from 'simple-crypto-js'
import validator from 'validator'

export const cypher = new SimpleCrypto(process.env.JWT_SECRET as string)

/**
 * Entcrypt a string
 * @param {string} data the string to encrypt
 * @return {string} the encrypted string
 */
export function encryptString(data: string): string {
    return cypher.encrypt(data)
}

/**
 * Decrypts a string encrypted by the system
 * @param {string} encrypted
 * @return {string} the original string
 */
export function decryptString(encrypted: string): string {
    const decrypted = cypher.decrypt(encrypted)
    return typeof decrypted === 'string' ? decrypted : ''
}

/**
 * Decrypts a string and return the decrypted string if it is an email address
 * @param {string} encryptedEmail an email address or an encrypted email address
 * @return {(string | null)} returns and email address or null if the decrypted string is not and emai address
 */
export function processEncryptedEmail(encryptedEmail: string): string | null {
    return cond([
        [(e: string) => validator.isEmail(e), always(encryptedEmail)],
        [(e: string) => validator.isEmail(decryptString(e)), always(decryptString(encryptedEmail))],
        [T, always(null)]
    ])(encryptedEmail as never)
}
