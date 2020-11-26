// api/v1/product/a123/index.js
const Router = require('koa-router')
const a123 = require('./a123-handler')

const router = new Router()
router.get('/', list)
router.get('/all', a123.getMergeDataHandler)
router.get('/db2', a123.getDataS2Handler)
router.get('/db3', a123.getDataS3Handler)
router.get('/testdetail2', a123.getDataS2TestDetailHandler)
router.get('/testdetail3', a123.getDataS3TestDetailHandler)


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