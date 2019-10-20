import { generateLoginToken, decodeLoginToken, LoginPayload, AAxError } from '../../../../src/helpers'
import { errorMessages } from '../../../../src/constants'

const LoginTokenData: LoginPayload = {
    id: 'abcdefghijklmn',
    isAdmin: false,
    group: 'PUBLIC',
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
    })
})
