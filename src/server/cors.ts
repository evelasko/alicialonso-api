const cors = {
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:8000/',
        'http://localhost',
        'https://aaxadmin.netlify.com',
        'https://admin.alicialonso.org',
        'https://alicialonso.org',
        'https://congreso.alicialonso.org'
    ],
    credentials: true,
    optionsSuccessStatus: 200
}

export default cors