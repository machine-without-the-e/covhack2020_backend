'use-strict'
//Import koa modules
const koa = require('koa');
const router = require('koa-router');
const body = require('koa-body');

//Import routes
const moistRoute = require('./routes/moistRoute');

const app = new koa();

app.use(moistRoute.routes());

app.listen(3000);
console.log("Listening on port 3000");