import { objectType } from 'nexus'

export const Space = objectType({
    name: 'Space',
    description: 'Space/room/area in a venue',
    definition(t) {
        t.model.id()
        t.model.name()
        t.list.field('venue', { type: Venue })
    }
})

export const Venue = objectType({
    name: 'Venue',
    description: 'Places',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.address()
        t.model.latitude()
        t.model.longitude()
        t.model.placeID()
        t.list.field('spaces', { type: Space })
    }
})