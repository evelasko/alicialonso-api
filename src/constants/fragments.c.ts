export const usersCacheFragment = `
fragment UserCache on User {
    id
    email
    password
    isAdmin
    group
}
`
export const eventsCacheFragment = `
fragment EventWithAuthor on Event {
    id
    title
    subtitle
    imageURL
    date
    target
    status
    author { id }    
}
`

export const newsesCacheFragment = `
        fragment NewsWithAuthor on News {
            id
            title
            subtitle
            body
            imageURL
            featured
            expiration
            target
            status
            author { id }
        }
    `
