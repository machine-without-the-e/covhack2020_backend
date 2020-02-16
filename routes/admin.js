var Router = require('koa-router');

var databaseModel = require('../models/database');

var router = Router({
	prefix: '/admin'
});

router.get(`/createdb`, async(cnx, next) => { 
    try{

        await databaseModel.createDatabase();

        cnx.body = {message: 'created successfully'};
        cnx.response.status = 200;//a-o-kay
    }catch(error){
        cnx.response.status = error.status || 400;
        cnx.body = {message:error.message};
    }
});

module.exports = router;