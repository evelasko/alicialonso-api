import {
    NewsCreateInput,
    EventCreateInput,
    SpaceCreateInput,
    VenueCreateInput,
    UserGroup,
    UserCreateInput,
    UserDelegate,
    VenueDelegate,
    SpaceDelegate,
    NewsDelegate,
    EventDelegate
} from '@generated/photon'
import { v4 } from 'uuid'
import moment from 'moment'
import bcrypt from 'bcryptjs'
import { photon } from '@libs'

export const passwordRaw = '1234567890'

export const ids = {
    venueA: v4(),
    placeA: v4(),
    venueB: v4(),
    placeB: v4(),
    venueC: v4(),
    placeC: v4()
}
export const emails = [
    'al@public.com',
    'ka@public.com',
    'fakeadmin1@alicialonso.org',
    'fakeadmin2@alicialonso.org',
    'tw@student.com',
    'am@student.com'
]

export interface TestDataItem {
    node: string
    delegate: UserDelegate | VenueDelegate | SpaceDelegate | NewsDelegate | EventDelegate
    items: UserCreateInput[] | VenueCreateInput[] | SpaceCreateInput[] | NewsCreateInput[] | EventCreateInput[]
}

export const userItems = async (): Promise<UserCreateInput[]> => [
    {
        firstname: 'Ashlyn',
        lastname: 'Leech',
        isAdmin: false,
        emailVerified: false,
        email: emails[0],
        password: await bcrypt.hash(passwordRaw, 8),
        group: UserGroup.GENERAL
    },
    {
        firstname: 'Kody',
        lastname: 'Albert',
        isAdmin: false,
        emailVerified: true,
        email: emails[1],
        group: UserGroup.GENERAL,
        password: await bcrypt.hash(passwordRaw, 8)
    },
    {
        firstname: 'Killian',
        lastname: 'Rodrigues',
        isAdmin: true,
        emailVerified: true,
        email: emails[2],
        group: UserGroup.STAFF,
        password: await bcrypt.hash(passwordRaw, 8)
    },
    {
        firstname: 'Aviana',
        lastname: 'Sampson',
        isAdmin: true,
        emailVerified: true,
        email: emails[3],
        group: UserGroup.STAFF,
        password: await bcrypt.hash(passwordRaw, 8)
    },
    {
        firstname: 'Tyron',
        lastname: 'Walter',
        isAdmin: false,
        emailVerified: false,
        email: emails[4],
        group: UserGroup.ESTUDIANTE,
        password: await bcrypt.hash(passwordRaw, 8)
    },
    {
        firstname: 'Alec',
        lastname: 'Mooney',
        isAdmin: false,
        emailVerified: true,
        email: emails[5],
        group: UserGroup.ESTUDIANTE,
        password: await bcrypt.hash(passwordRaw, 8)
    }
]

/**
 * Coordinate testing data
 * @export
 * @return {Promise<TestDataItem>} Array of data objects to fill the database
 */
export default async function testData(): Promise<TestDataItem[]> {
    const data: TestDataItem[] = []
    // add users --------------------------------------------------------
    data.push({
        node: 'users',
        delegate: photon.users,
        items: await userItems()
    })
    // add venues --------------------------------------------------------
    data.push({
        node: 'venues',
        delegate: photon.venues,
        items: [
            {
                id: ids.venueA,
                name: 'Venue A',
                address: 'Address Venue A',
                placeID: 'ABN2324sd',
                latitude: 123.5643,
                longitude: 4532.6655
            },
            {
                id: ids.venueB,
                name: 'Venue B',
                address: 'Address Venue B',
                placeID: 'w9r7tw7gforwufg',
                latitude: 1243.0098,
                longitude: 12.3322
            },
            {
                id: ids.venueC,
                name: 'Venue C',
                address: 'Address Venue C',
                placeID: 'w9r7gforwufg',
                latitude: 1243.008,
                longitude: 12.32
            }
        ]
    })
    // add spaces --------------------------------------------------------
    data.push({
        node: 'spaces',
        delegate: photon.spaces,
        items: [
            {
                id: ids.placeA,
                name: 'Place A',
                venue: { connect: { id: ids.venueA } }
            },
            {
                id: ids.placeB,
                name: 'Place B',
                venue: { connect: { id: ids.venueB } }
            },
            {
                id: ids.placeC,
                name: 'Place C',
                venue: { connect: { id: ids.venueC } }
            }
        ]
    })
    // add news --------------------------------------------------------
    data.push({
        node: 'news',
        delegate: photon.news,
        items: [
            {
                title: 'News Public 1',
                body: 'Body of News Public 1',
                target: UserGroup.GENERAL,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            },
            {
                title: 'News Public 2',
                body: 'Body of News Public 2',
                target: UserGroup.GENERAL,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            },
            {
                title: 'News Staff 1',
                body: 'Body of News Staff 1',
                target: UserGroup.STAFF,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            },
            {
                title: 'News Staff 2',
                body: 'Body of News Staff 2',
                target: UserGroup.STAFF,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            },
            {
                title: 'News Student 1',
                body: 'Body of News Student 1',
                target: UserGroup.ESTUDIANTE,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            },
            {
                title: 'News Student 2',
                body: 'Body of News Student 2',
                target: UserGroup.ESTUDIANTE,
                expiration: moment()
                    .add(3, 'days')
                    .toISOString(),
                author: { connect: { email: emails[3] } }
            }
        ]
    })
    // add events --------------------------------------------------------
    data.push({
        node: 'events',
        delegate: photon.events,
        items: [
            {
                title: 'Event Public In Time',
                body: 'Body of Event Public In Time',
                date: moment()
                    .add(10, 'days')
                    .toISOString(),
                target: UserGroup.GENERAL,
                place: { connect: { id: ids.placeA } },
                author: { connect: { email: emails[4] } }
            },
            {
                title: 'Event Staff In Time',
                body: 'Body of Event Staff In Time',
                date: moment()
                    .add(10, 'days')
                    .toISOString(),
                target: UserGroup.STAFF,
                place: { connect: { id: ids.placeB } },
                author: { connect: { email: emails[4] } }
            },
            {
                title: 'Event Student In Time',
                body: 'Body of Event Student In Time',
                date: moment()
                    .add(10, 'days')
                    .toISOString(),
                target: UserGroup.ESTUDIANTE,
                place: { connect: { id: ids.placeC } },
                author: { connect: { email: emails[4] } }
            },
            {
                title: 'Event Public Expired',
                body: 'Body of Event Public Expired',
                date: moment()
                    .subtract(10, 'days')
                    .toISOString(),
                target: UserGroup.GENERAL,
                place: { connect: { id: ids.placeA } },
                author: { connect: { email: emails[4] } }
            },
            {
                title: 'Event Staff Expired',
                body: 'Body of Event Staff Expired',
                date: moment()
                    .subtract(10, 'days')
                    .toISOString(),
                target: UserGroup.STAFF,
                place: { connect: { id: ids.placeB } },
                author: { connect: { email: emails[4] } }
            },
            {
                title: 'Event Student Expired',
                body: 'Body of Event Student Expired',
                date: moment()
                    .subtract(10, 'days')
                    .toISOString(),
                target: UserGroup.ESTUDIANTE,
                place: { connect: { id: ids.placeC } },
                author: { connect: { email: emails[4] } }
            }
        ]
    })
    return data
}
