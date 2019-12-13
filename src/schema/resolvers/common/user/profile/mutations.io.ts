/* eslint-disable functional/no-throw-statement */
/* eslint-disable functional/no-conditional-statement */
import { booleanArg, extendType, mutationField, stringArg } from 'nexus'

import { Context } from '@aatypes'

export const ProfileMutations = extendType({
    type: 'Mutation',
    definition(t) {
        t.crud.createOneSocialNetwork({ alias: 'createSocialNetwork', type: 'SocialNetwork' })
    }
})

export const AddAddress = mutationField('addAddress', {
    type: 'Address',
    description: `Add a new address to the currently logged in user.`,
    args: {
        address1: stringArg({ required: true }),
        address2: stringArg({ required: false }),
        city: stringArg({ required: true }),
        region: stringArg({ required: true }),
        country: stringArg({ required: true }),
        code: stringArg({ required: true, default: 'ES' }),
        primary: booleanArg({ required: false, default: false })
    },
    resolve: async (parent, args, { photon, user }: Context) =>
        photon.addresses.create({ data: { ...args, owner: { connect: { id: user && user.id } } } })
})

export const UpdateAddress = mutationField('updateAddress', {
    type: 'Address',
    description: `Updates an existing address of the currently logged in user.`,
    args: {
        id: stringArg({ required: true }),
        address1: stringArg({ required: false }),
        address2: stringArg({ required: false }),
        city: stringArg({ required: false }),
        region: stringArg({ required: false }),
        country: stringArg({ required: false }),
        code: stringArg({ required: false }),
        primary: booleanArg({ required: false, default: false })
    },
    resolve: async (parent, args, { photon, user }: Context) =>
        photon.addresses.update({ where: { id: args.id }, data: { ...args } })
})

export const addSocialLink = mutationField('addSocialLink', {
    type: 'SocialLink',
    description: `Adds a new social link for the current logged in user`,
    args: {
        link: stringArg({ required: true }),
        network: stringArg({ required: true })
    },
    resolve: async (parent, { link, network }, { photon, user }: Context) =>
        photon.socialLinks.create({
            data: {
                link,
                owner: { connect: { email: user && user.email } },
                socialNetwork: { connect: { id: network } }
            }
        })
})
