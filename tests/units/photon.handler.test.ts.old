import { getAdminEmails } from '../../src/helpers'
import { isEmail } from 'validator'

describe('Photon Handler Tests', () => {
    test('should return and array of valid email addresses', async () => {
        const list = await getAdminEmails()
        expect(list.length).toBeGreaterThan(0)
        expect(isEmail(list[0])).toBeTruthy()
    })
})
