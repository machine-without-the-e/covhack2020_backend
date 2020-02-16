var Router = require('koa-router');

var dataDoa = require('../models/dataDoa');
var fetch = require('../fetches/fetch');

const config = require('../config');

var router = Router({
	prefix: '/data'
});

/*gets data*/
router.get(`/`, async(cnx, next) => { 
    try{
        const body = cnx.request.body;
        
        const moisture = body.moisturelevel || 0;

        console.log(await fetch.getData(config.url, config.routes.data));
  

        cnx.body = {message: 'Set'};
        cnx.response.status = 200;//a-o-kay
    }catch(error){
        cnx.response.status = error.status || 400;
        cnx.body = {message:error.message};
    }
});

module.exports = router;