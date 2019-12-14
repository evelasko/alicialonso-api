import path from 'path'
import { contains, prop } from 'ramda'

import { readFile } from '@helpers'
import { Photon } from '@prisma/photon'

import { getRawData } from '../config/testData'

const rawData = getRawData()
const photon = new Photon()

describe('check seeded data integrity and access', () => {
    it('should contain the same amount of users', async () => {
        const newsAtDb = await photon.news.findMany()
        expect(rawData.news.length).toEqual(newsAtDb.length)
        const admins = await photon.users.findMany({ where: { isAdmin: true }})
        expect(rawData.admins.length).toEqual(admins.length)
    })
})
