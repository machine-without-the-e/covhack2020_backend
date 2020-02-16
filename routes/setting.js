var Router = require('koa-router');

var settingDao = require('../models/settingDao');
var fetch = require('../fetches/fetch');

const config = require('../config');

var router = Router({
	prefix: '/setting'
});

/*sets setting*/
router.post(`/`, async(cnx, next) => { 
    try{
        const body = cnx.request.body;
        
        const moisture = body.moisturelevel || 0;
        const light = body.lightlevel || 0;

        await settingDao.set(moisture, light);
        await fetch.postData(config.url, config.routes.config, {
            moisture: moisture,
            light: light
        });
  
        cnx.body = {message: 'Set'};
        cnx.response.status = 200;//a-o-kay
    }catch(error){
        cnx.response.status = error.status || 400;
        cnx.body = {message:error.message};
    }
});

module.exports = router;