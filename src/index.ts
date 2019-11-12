// import 'module-alias/register'
import { bootstrap } from './server'

// TODO this is bad practice... check how to ptoperly and gracefully restart the server in case of a crash
process.on('unhandledRejection', err => {
    console.log(`
---------------------------------------------
  PROMISE REJECTION
  約束は拒否さレました
---------------------------------------------
${err}\n\n=============================================\n\n\n
`)
})

// const port = process.env.NODE_ENV !== 'test' ? parseInt(process.env.PORT || '4000', 10) : 5000
// app.listen({ port }, () => {
//     console.log(' 💃 ', port || 4000)
// })
bootstrap()
    .then(() => {
        console.log(`サーバ開始 alicialonso@:`)
    })
    .catch(err => {
        console.log(err)
    })
