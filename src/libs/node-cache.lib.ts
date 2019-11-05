/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import NodeCache, { Key } from 'node-cache'
import { useNodeCacheAdapter } from 'type-cacheable'

/**
 * node-cache alicialonso custom class
 *
 * @export
 * @class Cache
 */
export class NodeCacheService {
    public cache: NodeCache

    /**
     * Creates an instance of Cache.
     * @param {*} ttlSeconds
     * @memberof Cache
     */
    constructor(ttlSeconds: number | undefined) {
        this.cache = new NodeCache({
            stdTTL: ttlSeconds || 0, // the standard ttl as number in seconds for every generated cache element. 0 = unlimited
            checkperiod: ttlSeconds || 0 * 0.2, // The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check
            useClones: false
        })
        useNodeCacheAdapter(this.cache)
    }

    set(key: Key, value: any): { key: Key; value: any } {
        this.cache.set(key, value)
        return { key, value }
    }

    // TODO Fix storeFunction to make it accept a fn returning the value to set
    // async get(key: string | number, storeFunction?: () => any): Promise<any> {
    //     const value = this.cache.get(key)
    //     if (value) return value
    //     if (!storeFunction) return null
    //     const result = await storeFunction()
    //     this.cache.set(key, result)
    //     return result
    // }
    get(key: Key): any | null {
        return this.cache.get(key)
    }

    del(keys: Key | Key[]): Key | Key[] {
        this.cache.del(keys)
        return keys
    }

    delByPrefix(prefixStr: string | null): number | null {
        if (!prefixStr) {
            return null
        }
        let deleted = 0
        const keys = this.cache.keys()
        for (const key of keys) {
            if (key.indexOf(prefixStr) === 0) {
                this.del(key)
                deleted++
            }
        }
        return deleted
    }

    flush(): void {
        this.cache.flushAll()
    }
}
