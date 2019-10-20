import { objectType } from 'nexus'

export const AuthPayload = objectType({
    name: 'AuthPayload',
    description: 'Authorization payload data',
    definition(t) {
        t.string('token', { nullable: false })
    }
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.firstname()
        t.model.lastname()
        t.model.email()
        t.model.emailVerified()
        t.model.password()
        t.model.group()
        t.model.groupRequest()
        t.model.isAdmin()
    }
})
