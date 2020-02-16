'use-strict'
//Import koa modules
const koa = require('koa');
const router = require('koa-router');
const body = require('koa-body');

//Import routes
const twilio = require('./routes/twilio');

const app = new koa();

app.use(twilio.routes());

app.listen(3000);
console.log("Listening on port 3000");
