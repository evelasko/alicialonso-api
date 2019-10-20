export function generateRandomString(stringLength: number): string {
    let randomString = ''
    let randomAscii
    for (let i = 0; i < stringLength; i += 1) {
        randomAscii = Math.floor(Math.random() * 25 + 97)
        randomString += String.fromCharCode(randomAscii)
    }
    return randomString
}

export function generate(): null {
    return null
}
