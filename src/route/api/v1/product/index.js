// api/v1/product/index.js
const Router = require('koa-router')

const router = new Router()

router.use('/a123', require('./a123'))

module.exports = router.routes()