import authMiddleware from '../../src/server/middleware/authentication.mw'
import { generateLoginToken } from '../../src/helpers'
import { LoginPayload } from '../../src/types'
import { Request } from 'express'

type mockRequestParams = {
    auth?: string
    data?: {}
    device?: string
}

const mockRequest = ({ auth, data, device }: mockRequestParams): Request => {
    const headers: { auth?: string; device?: string } = {}
    const session: { data?: {} } = {}
    if (auth) headers.auth = auth
    if (device) headers.device = device
    if (data) session.data = data
    // @ts-ignore
    return { headers, session }
}

const user: LoginPayload = { id: '123abc', email: 'user@email.com', group: 'GENERAL', isAdmin: false }

describe('Server Middleware Tests', () => {
    describe('Authentication middleware', () => {
        test('should return a valid LoginPayload object', async () => {
            const req = mockRequest({ auth: await generateLoginToken(user) })
            const payload = await authMiddleware(req)
            expect(payload).toStrictEqual(user)
        })
        test('should return null if no auth method provided', async () => {
            const req = mockRequest({})
            const payload = await authMiddleware(req)
            expect(payload).toBeNull()
        })
    })
})
