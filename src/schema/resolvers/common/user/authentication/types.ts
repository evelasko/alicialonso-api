import { objectType } from 'nexus'

export const AuthPayload = objectType({
    name: 'AuthPayload',
    description: 'Authorization payload token with the key required for the mutation action requested',
    definition(t) {
        t.string('token', { nullable: false })
    }
})

// export const User = objectType({
//     name: 'User',
//     description: `Registered user`,
//     definition(t) {
//         t.model.id()
//         t.model.firstname()
//         t.model.lastname()
//         t.model.email()
//         t.model.emailVerified()
//         t.model.password()
//         t.model.group()
//         t.model.groupRequest()
//         t.model.isAdmin()
//     }
// })
