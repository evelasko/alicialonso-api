import { queryType } from 'nexus'

export const SpaceVenueQueries = queryType({
    definition(t) {
        t.crud.space()
        t.crud.spaces()
        t.crud.venue()
        t.crud.venues()
    }
})
