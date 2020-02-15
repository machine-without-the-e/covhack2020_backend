'use-strict'
//Import koa modules
const koa = require('koa');
const router = require('koa-router');
const body = require('koa-body');

//Import routes
const moistRoute = require('./routes/moistRoute');

const app = koa();

app.use(moistRoute.routes());

app.listen(3000);