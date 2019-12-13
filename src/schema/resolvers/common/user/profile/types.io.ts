import { objectType } from 'nexus'

export const SocialNetwork = objectType({
    name: 'SocialNetwork',
    description: `Social networks available for user profiles`,
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.baseURL()
        t.model.ownURL()
        t.model.userLinks({ type: 'SocialLink' })
    }
})

export const SocialLink = objectType({
    name: 'SocialLink',
    description: `User's social network link`,
    definition(t) {
        t.model.id()
        t.model.link()
        t.model.socialNetwork({ type: 'SocialNetwork' })
    }
})

export const Role = objectType({
    name: 'Role',
    description: `User permission role`,
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.users({ type: 'User' })
    }
})

export const OfficialDocument = objectType({
    name: 'OfficialDocument',
    description: 'Government issued identification document',
    definition(t) {
        t.model.id()
        t.model.number()
        t.model.type()
        t.model.other()
        t.model.expiration()
        t.model.owner({ type: 'User' })
    }
})

export const Address = objectType({
    name: 'Address',
    description: `User's physical address`,
    definition(t) {
        t.model.id()
        t.model.owner({ type: 'User' })
        t.model.address1()
        t.model.address2()
        t.model.city()
        t.model.region()
        t.model.country()
        t.model.code()
        t.model.primary()
    }
})

export const Device = objectType({
    name: 'Device',
    description: `User's mobile or digital device`,
    definition(t) {
        t.model.id()
        t.model.owner({ type: 'User' })
        t.model.countryCode()
        t.model.number()
        t.model.type()
        t.model.notificationsDevice()
        t.model.notificationsPermission()
        t.model.verified()
    }
})

export const Department = objectType({
    name: 'Department',
    description: 'Department is the base unit of HR organizational areas',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.members({ type: 'User' })
    }
})
