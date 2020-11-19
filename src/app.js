const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const koaBody = require('koa-body')
const serve = require('koa-static')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router()


const stripPrefix = async (ctx, next) => {
    if (!ctx.path.startsWith('/-')) {
        ctx.status = 404
        return
    }

    ctx.path = ctx.path.slice(2)
    await next()
}

app.use(logger())
app.use(router.routes()).use(router.allowedMethods())
app.use(koaBody({ multipart: true, jsonLimit: '50mb' }))
app.use(require('./route'))

app.use(stripPrefix)
app.use(serve(path.join(process.cwd(), 'public')))

app.listen(3000, () => {
    console.log('Server running on port 3000');
})