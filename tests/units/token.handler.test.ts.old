import { generateLoginToken, decodeLoginToken, AAxError } from '../../src/helpers'
import { errorMessages } from '../../src/constants'
import { LoginPayload } from '../../src/types'

const LoginTokenData: LoginPayload = {
    id: 'abcdefghijklmn',
    isAdmin: false,
    group: 'GENERAL',
    email: 'a@p.com'
}

describe('System Tokens', () => {
    describe('Login Tokens', () => {
        test('should generate and decode login tokens', async () => {
            const token = await generateLoginToken(LoginTokenData)
            expect(token).toBeTruthy()
            const decoded: LoginPayload | AAxError = await decodeLoginToken(token)
            expect(decoded).not.toBeInstanceOf(AAxError)
        })
        test('should return error on invalid login token with correct user message', async () => {
            const decoded = await decodeLoginToken('wliuwgenowegboeiqgyboqiwebgd')
            expect(decoded).toBeInstanceOf(AAxError)
            if (decoded instanceof AAxError) {
                expect(decoded.userMessage).toBe(errorMessages.s_invalidCodeProvided)
            }
        })
        test('should return a LoginPayload object', async () => {
            const token = await generateLoginToken(LoginTokenData)
            const decoded = await decodeLoginToken(token)
            expect(decoded).toMatchObject(LoginTokenData)
        })
        test('should silently return error if invalid token', async () => {
            const decoded = await decodeLoginToken('dwdubldbljfelbdefej')
            expect(decoded).toBeInstanceOf(AAxError)
        })
    })
})
