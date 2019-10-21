// import 'module-alias/register'
import app from './server'

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

app.listen({ port }, () => {
    console.log('サーバ 💃 alicialonso@:', port || 4000)
})
