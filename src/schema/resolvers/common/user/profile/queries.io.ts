import { extendType } from 'nexus'

export const ProfileQueries = extendType({
    type: 'Query',
    definition(t) {
        t.crud.address()
        t.crud.addresses()
        t.crud.department()
        t.crud.departments()
        t.crud.socialLink()
        t.crud.socialLinks()
        t.crud.socialNetwork()
        t.crud.socialNetworks()
        t.crud.role()
        t.crud.roles()
        t.crud.officialDocument()
        t.crud.officialDocuments()
        t.crud.device()
        t.crud.devices()
    }
})
