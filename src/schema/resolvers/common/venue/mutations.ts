import { mutationType } from 'nexus'

export const VenueSpaceMutations = mutationType({
    definition(t) {
        t.crud.createOneSpace({ alias: 'createSpace', type: 'Space' })
        t.crud.createOneVenue({ alias: 'createVenue', type: 'Venue' })
    }
})
