'use-strict'
//Import koa modules
const koa = require('koa');
const router = require('koa-router');
const body = require('koa-body');

//Import routes
const setting = require('./routes/setting.js');
const adminRoute = require('./routes/admin');
const zoopla = require('./routes/zoopla.js');

const app = new koa();

app.use(setting.routes());
app.use(adminRoute.routes());
app.use(zoopla.routes());

app.listen(3000);
console.log("Listening on port 3000");