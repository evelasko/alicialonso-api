/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'
import { Pool } from 'pg'
import { TestDataItem } from './testData'

export const resetDb = async (): Promise<void> => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL as string
    })
    await pool.query(`SELECT truncate_schema('alicialonso-dev');`)
    await pool.end()
}

/*
CREATE OR REPLACE FUNCTION truncate_schema(_schema character varying)
  RETURNS void AS
$BODY$
declare
    selectrow record;
begin
for selectrow in
select 'TRUNCATE TABLE ' || quote_ident(_schema) || '.' ||quote_ident(t.table_name) || ' CASCADE;' as qry 
from (
     SELECT table_name
     FROM information_schema.tables
     WHERE table_type = 'BASE TABLE' AND table_schema = _schema
     )t
loop
execute selectrow.qry;
end loop;
end;
$BODY$
  LANGUAGE plpgsql
*/

export const addManyItemsSequentially = async (testDataItem: TestDataItem): Promise<number> => {
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

export const processPromisesSequentially = async (delegate: any, params: any[]): Promise<any> => {
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
