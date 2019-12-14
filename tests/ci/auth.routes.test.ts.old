import request from 'supertest'
import app from '../../src/server'
import { authBaseRoute, authConfirmationRoute } from '../../src/constants'

describe('authentication http routes', () => {
    it('rejects invalid key', async () => {
        const key = '123qwe'
        const res = await request(app)
            .get(`${authBaseRoute}/${authConfirmationRoute}/${key}`)
            .expect(500)
        expect(res.body).toBeDefined()
    })
})
