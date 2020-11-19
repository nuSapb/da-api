// api/v1/product/a123/index.js
const Router = require('koa-router')
const a123 = require('./a123-handler')

const router = new Router()
router.get('/', list)
router.get('/data', a123.getDataHandler)


module.exports = router.routes()

function list(ctx) {
	ctx.status = 200
	ctx.body = {
		status: 'success',
		message: 'list all data'
	}
	console.log(ctx.body)
}

module.exports = router.routes()