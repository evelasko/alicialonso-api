import 'module-alias/register'
import server from './server'

process.on('unhandledRejection', err => {
    console.log(`
---------------------------------------------
  PROMISE REJECTION
  約束は拒否さレました
---------------------------------------------
${err}\n\n=============================================\n\n\n
`)
})

const port = process.env.NODE_ENV !== 'test' ? parseInt(process.env.PORT || '4000', 10) : 5000

export const options = {
    port,
    cors: {
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
}

server.start(options, () => {
    console.log('サーバ 💃 @:', port || 4000)
})
