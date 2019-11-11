import { NodeCacheService } from '../../src/libs'
import { redisSessionPrefix } from '../../src/constants'
import { v4 } from 'uuid'

const nCache = new NodeCacheService(1)

const kvPairs = [
    { iKey: redisSessionPrefix + v4(), iValue: { some: 'text', one: 1 } },
    { iKey: redisSessionPrefix + v4(), iValue: { some: 'string', numbers: { one: 1, two: 2 } } },
    { iKey: redisSessionPrefix + v4(), iValue: { text: 'long', data: [5, 6, 7] } }
]

describe('Node Cache Servicerw Class', () => {
    it('should return and add/retrieve simple key value data', async () => {
        const { iKey, iValue } = kvPairs[0]
        const { key, value } = nCache.set(iKey, iValue)
        expect(key).toBe(iKey)
        expect(value).toStrictEqual(iValue)
        const rValue = await nCache.get(iKey)
        expect(rValue).toStrictEqual(iValue)
    })
    // it('should add key if not exist with the result of a Promise as its value', async () => {
    //     const { iKey, iValue } = kvPairs[1]
    //     const result = await nCache.get(iKey, () => iValue)
    //     expect(result).toBe(iValue)
    //     const rValue = nCache.get(iKey)
    //     expect(rValue).toStrictEqual(iValue)
    // })
    it('should delete a single key', () => {
        const { iKey, iValue } = kvPairs[2]
        nCache.set(iKey, iValue)
        const dKey = nCache.del(iKey)
        expect(dKey).toBe(iKey)
    })
    it('should delete multiple keys sharing same prefix string', () => {
        const deleted = nCache.delByPrefix(redisSessionPrefix)
        expect(deleted).toBeGreaterThan(0)
    })
    it('should flush away all stored keys', () => {
        for (let i = 0; i < 5; i++) {
            nCache.set(i, v4())
        }
        const iStats = nCache.cache.getStats()
        expect(iStats.keys).toBeGreaterThan(0)
        nCache.flush()
        const oStats = nCache.cache.getStats()
        expect(oStats.keys).toBeLessThan(iStats.keys)
    })
})
