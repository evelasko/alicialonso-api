/* eslint-disable require-jsdoc */
import NodeCache from 'node-cache'
import { useNodeCacheAdapter } from 'type-cacheable'
// TODO resolve the many problems of the node-cache class: https://medium.com/@danielsternlicht/caching-like-a-boss-in-nodejs-9bccbbc71b9b
/**
 * node-cache alicialonso custom class
 *
 * @export
 * @class Cache
 */
export default class Cache {
    public cache: NodeCache

    /**
     * Creates an instance of Cache.
     * @param {*} ttlSeconds
     * @memberof Cache
     */
    constructor(ttlSeconds: number | undefined) {
        this.cache = new NodeCache({
            stdTTL: ttlSeconds || 0,
            checkperiod: ttlSeconds || 0 * 0.2,
            useClones: false
        })
        useNodeCacheAdapter(this.cache)
    }

    get(key: string, storeFunction: () => any) {
        const value = this.cache.get(key)
        if (value) {
            return Promise.resolve(value)
        }

        return storeFunction().then((result: any) => {
            this.cache.set(key, result)
            return result
        })
    }

    del(keys: any) {
        this.cache.del(keys)
    }

    delStartWith(startStr: string | null) {
        if (!startStr) {
            return
        }

        const keys = this.cache.keys()
        for (const key of keys) {
            if (key.indexOf(startStr) === 0) {
                this.del(key)
            }
        }
    }

    flush() {
        this.cache.flushAll()
    }
}
