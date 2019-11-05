import testData, { TestDataItem } from './testData'
import { resetDb, addManyItemsSequentially, processPromisesSequentially } from './handleDb'

/**
 * Reset and seed the database with test data
 * @export
 * @return {Promise<string|Error>} Return 'done' if succesful, otherwise Error
 */
export default async function resetAndSeed(): Promise<TestDataItem[]> {
    // reset database using PostgreSQL Script (available below)
    await resetDb()
    const data = await testData()

    try {
        const res = await processPromisesSequentially(addManyItemsSequentially, data)
        console.log('result: ', res)
        return data
    } catch (err) {
        throw err
    }
}
