/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */
// import 'module-alias/register'
import app from './server'

const port = process.env.NODE_ENV !== 'test' ? parseInt(process.env.PORT || '4000', 10) : 5000
app.listen({ port }, () => {
    console.log('サーバ 💃 alicialonso@:', port || 4000)
})
