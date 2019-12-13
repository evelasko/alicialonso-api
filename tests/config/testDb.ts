/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool } from 'pg'

import { RawData, testData, TestDataItem } from './testData'

const resetDb = async (): Promise<void> => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL as string
    })
    await pool.query(`SELECT truncate_schema('alicialonso-dev');`)
    await pool.end()
}

const addManyItemsSequentially = async (testDataItem: TestDataItem): Promise<number> => {
    const items = testDataItem.items as any
    const delegate = testDataItem.delegate as any
    const tasks: any[] = []
    const add = (delegate: any, item: any): Promise<any> =>
        new Promise<any>(resolve => {
            delegate.create({ data: { ...item } }).then((r: any) => {
                tasks.push(r)
                resolve(r)
            })
        })
    await items.reduce((accPromise: any, item: any) => accPromise.then(() => add(delegate, item)), Promise.resolve())
    return tasks.length
}

const processPromisesSequentially = async (delegate: any, params: any[]): Promise<any> => {
    const tasks: any[] = []
    const task = (param: any): Promise<any> =>
        new Promise<any>(resolve => {
            delegate(param).then((r: any) => {
                tasks.push(r)
                resolve(r)
            })
        })
    await params.reduce((accPromise: any, param: any) => accPromise.then(() => task(param)), Promise.resolve())
    return tasks
}

export default async function resetAndSeed(): Promise<any> {
    // reset database using PostgreSQL truncate
    await resetDb()
    const data = testData()
    await processPromisesSequentially(addManyItemsSequentially, data).catch(err => { throw err })
    return data
}