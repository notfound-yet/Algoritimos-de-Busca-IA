const Koa = require('koa')
const Router = require('koa-router')
const applyRoutes = require('./routes')
const bodyParse = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

module.exports = () => {
    console.log('koa creating new server')

    applyRoutes(router)

    app.use(bodyParse()).use(router.routes()).use(router.allowedMethods())
    app.listen(8080)
}