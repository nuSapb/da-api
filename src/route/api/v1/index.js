// api/v1/product/index.js
const Router = require('koa-router')

const router = new Router()

router.use('/product', require('./product'))

module.exports = router.routes()