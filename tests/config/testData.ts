import bcrypt from 'bcryptjs'
import faker from 'faker'
import { readFileSync, writeFileSync } from 'fs'
import moment from 'moment'
import path from 'path'
import { curry, flatten, map, prop, times } from 'ramda'
import { v4 } from 'uuid'

import {
    EventCreateInput, EventDelegate, NewsCreateInput, NewsDelegate, Photon, SpaceCreateInput,
    SpaceDelegate, UserCreateInput, UserDelegate, UserGroup, VenueCreateInput, VenueDelegate
} from '@prisma/photon'

const photon = new Photon()

const generateUser = curry((isAdmin: boolean, emailVerified: boolean, group: UserGroup):UserCreateInput => {
    const firstname = faker.name.firstName()
    const lastname = faker.name.lastName()
    return Object.assign({}, {
        id: v4(),
        firstname,
        lastname,
        email: faker.internet.email(firstname.toLowerCase(), lastname.toLowerCase()),
        password: faker.internet.password(12),
        isAdmin, emailVerified, group
    })
})

const generateVenue = (): VenueCreateInput => Object.assign({}, {
    id: v4(),
    name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
    address: `${faker.address.streetAddress}, ${faker.address.city()}. ${faker.address.zipCode()} ${faker.address.country}`,
    placeID: v4(),
    latitude: parseFloat(faker.address.latitude()),
    longitude: parseFloat(faker.address.longitude())
})

const generateSpaceOfVenue = (venue: VenueCreateInput): SpaceCreateInput => Object.assign({}, {
    id: v4(),
    name: faker.address.secondaryAddress(),
    venue: { connect: { id: prop('id', venue)}}
})

const generateNewsOfUser = curry((user: UserCreateInput, userGroup: UserGroup): NewsCreateInput => Object.assign({}, {
    id: v4(),
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.text(),
    body: faker.lorem.paragraphs(),
    target: userGroup,
    expiration: moment().add(3, 'days').toISOString(),
    author: { connect: { email: prop('email', user) } }
}))

const generateEventOfUserInSpace = curry((space: SpaceCreateInput, user: UserCreateInput, userGroup: UserGroup): EventCreateInput => Object.assign({}, {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.text(),
    body: faker.lorem.paragraphs(),
    date: moment().add(faker.random.number(50)+1, 'days').toISOString(),
    target: userGroup,
    author: { connect: { email: prop('email', user) } },
    place: { connect: { id: prop('id', space) } }
}))

export const groups = [UserGroup.ESTUDIANTE, UserGroup.STAFF, UserGroup.GENERAL]

export const admins = times(() => generateUser(true)(true)(UserGroup.STAFF), 3) // generates 3 admins
export const news = flatten(admins.map(admin => groups.map(generateNewsOfUser(admin)))) // generates 9 newses: 1 of each group (3) for each admin (3)
export const venues = times(() => generateVenue(), 3) // generates 3 venues
export const spaces = flatten(venues.map(venue => times(i => generateSpaceOfVenue(venue), 3))) // generates 9 spaces: 3 for each of 3 venues
export const events = flatten(spaces.map(space => admins.map(admin => groups.map(generateEventOfUserInSpace(space)(admin))))) // generates 1 event for each group (3) for each admin (3) at each space (9)
export const verifiedUsers = flatten(times(() => map(generateUser(false)(true), groups), 2)) // generates 2 verified user for each group
export const unverifiedUsers = times(() => generateUser(false)(false)(UserGroup.GENERAL), 2) // generates 2 unverified users
export const users = flatten([admins, verifiedUsers, unverifiedUsers])

export interface TestDataItem {
    node: string
    delegate: UserDelegate | VenueDelegate | SpaceDelegate | NewsDelegate | EventDelegate
    items: UserCreateInput[] | VenueCreateInput[] | SpaceCreateInput[] | NewsCreateInput[] | EventCreateInput[]
}

export type RawData = {
    admins: UserCreateInput[],
    verifiedUsers: UserCreateInput[],
    unverifiedUsers: UserCreateInput[],
    news: NewsCreateInput[],
    venues: VenueCreateInput[],
    spaces: SpaceCreateInput[],
    events: EventCreateInput[],
}

const pathToRawData = path.join(__dirname, './data.json')

/**
 * Coordinate testing data seed
 * @return {TestDataItem} Array of data objects to fill the database
 */
export function testData(): TestDataItem[] {
    const data: TestDataItem[] = []
    // add users --------------------------------------------------------
    data.push({
        node: 'users',
        delegate: photon.users,
        items: users.map(user => Object.assign({}, {...user, password: bcrypt.hashSync(user.password) }))
    })
    // add venues --------------------------------------------------------
    data.push({ node: 'venues', delegate: photon.venues, items: venues })
    // add spaces --------------------------------------------------------
    data.push({ node: 'spaces', delegate: photon.spaces, items: spaces })
    // add news --------------------------------------------------------
    data.push({ node: 'news', delegate: photon.news, items: news })
    // add events --------------------------------------------------------
    data.push({ node: 'events', delegate: photon.events, items: events })
    
    const testRawData: RawData = { admins, news, venues, spaces, events, verifiedUsers, unverifiedUsers }
    writeFileSync(pathToRawData, JSON.stringify(testRawData), {encoding: 'utf8'})
    return data
}

export const getRawData = (): RawData => JSON.parse(readFileSync(pathToRawData, {encoding: 'utf8'}))
