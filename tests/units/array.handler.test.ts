import { normalizeToArray } from '../../src/helpers'

describe('array handler functions', () => {
    it('should always return an array', () => {
        const undef = normalizeToArray()
        const nil = normalizeToArray(null)
        const str = normalizeToArray('sole')
        const nmb = normalizeToArray(1)
        const obj = normalizeToArray({ a: 1, b: 'u' })
        const arr = normalizeToArray([1, 'a', { o: 0 }])
        expect(Array.isArray(undef)).toBe(true)
        expect(Array.isArray(nil)).toBe(true)
        expect(Array.isArray(str)).toBe(true)
        expect(str.length).toBe(1)
        expect(Array.isArray(nmb)).toBe(true)
        expect(Array.isArray(obj)).toBe(true)
        expect(Array.isArray(arr)).toBe(true)
    })
})
