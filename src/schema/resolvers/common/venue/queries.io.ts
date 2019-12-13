import { extendType } from 'nexus'

export const SpaceVenueQueries = extendType({
    type: 'Query',
    definition(t) {
        t.crud.space()
        t.crud.spaces()
        t.crud.venue()
        t.crud.venues()
    }
})
