import crypto from 'crypto'
import validator from 'validator'

/**
 * Entcrypt a string
 * @param {string} data the string to encrypt
 * @return {string} the encrypted string
 */
export function encryptString(data: string): string {
    const key = crypto.createCipher('aes-128-cbc', process.env.JWT_SECRET as string)
    let cry = key.update(data, 'utf8', 'hex')
    cry += key.final('hex')
    return cry
}

/**
 * Decrypts a string encrypted by the system
 * @param {string} encrypted
 * @return {string} the original string
 */
export function decryptString(encrypted: string): string {
    const key = crypto.createDecipher('aes-128-cbc', process.env.JWT_SECRET as string)
    let str = key.update(encrypted, 'hex', 'utf8')
    str += key.final('utf8')
    return str
}

/**
 * Decrypts a string and return the decrypted string if it is an email address
 * @param {string} encryptedEmail an email address or an encrypted email address
 * @return {(string | null)} returns and email address or null if the decrypted string is not and emai address
 */
export function processEncryptedEmail(encryptedEmail: string): string | null {
    if (validator.isEmail(encryptedEmail)) return encryptedEmail
    const decrypted = decryptString(encryptedEmail)
    if (validator.isEmail(decrypted)) return decrypted
    return null
}
