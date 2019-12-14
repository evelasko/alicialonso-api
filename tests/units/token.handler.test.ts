import { decodeLoginToken, generateLoginToken } from '../../src/helpers'
import { LoginPayload } from '../../src/types'

const LoginTokenData: LoginPayload = {
    id: 'abcdefghijklmn',
    isAdmin: false,
    group: 'GENERAL',
    email: 'a@p.com'
}

describe('System Tokens', () => {
    describe('Login Tokens', () => {
        test('should generate and decode login tokens', () => {
            const token = generateLoginToken(LoginTokenData)
            expect(token).toBeTruthy()
            const decoded: LoginPayload | null = decodeLoginToken(token)
            expect(decoded).not.toBeFalsy()
        })
        test('should return error on invalid login token with correct user message', () => {
            const decoded = decodeLoginToken('wliuwgenowegboeiqgyboqiwebgd')
            expect(decoded).toBeFalsy()
        })
        test('should return a LoginPayload object', () => {
            const token = generateLoginToken(LoginTokenData)
            const decoded = decodeLoginToken(token)
            expect(decoded).toMatchObject(LoginTokenData)
        })
        test('should silently return error if invalid token', () => {
            const decoded = decodeLoginToken('dwdubldbljfelbdefej')
            expect(decoded).toBeFalsy()
        })
    })
})
