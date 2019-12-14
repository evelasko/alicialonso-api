import httpMocks from 'node-mocks-http'
import { __, has, hasPath } from 'ramda'

import {
    context, contextAuth, resolveAuthToken, resolveDeviceToken, setContextShieldCache
} from '../../src/helpers'

const reqResMocks = httpMocks.createMocks()
describe('Graphql context object tests', () => {
    it('should return a context object', async () => {
        const received = await context(reqResMocks)
        const ctxHas = has(__, received)
        expect(ctxHas('photon')).toBe(true)
        expect(ctxHas('request')).toBe(true)
        expect(ctxHas('aaxCache')).toBe(true)
        expect(ctxHas('redis')).toBe(true)
        expect(ctxHas('user')).toBe(true)
        expect(ctxHas('url')).toBe(true)
    })
    // it('should return user object from session', async () => {
    //     await contextAuth()
    // })
    it('should mutate context adding provided object to shieldCache property', async () => {
        const received = await context(reqResMocks)
        const objKey = 'addedKey'
        const objValue = '1234567890'
        const obj = { [objKey]: objValue }
        setContextShieldCache(received)('addedKey', obj[objKey])
        expect(hasPath(['shieldCache', objKey], received)).toBe(true)
    })
    // it('should return null')
})
