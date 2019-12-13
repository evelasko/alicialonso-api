import { extendType } from 'nexus'

export const VenueSpaceMutations = extendType({
    type: 'Mutation',
    definition(t) {
        t.crud.createOneSpace({ alias: 'createSpace', type: 'Space' })
        t.crud.createOneVenue({ alias: 'createVenue', type: 'Venue' })
    }
})
