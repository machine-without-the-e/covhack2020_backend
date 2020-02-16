var Router = require('koa-router');

//var dataDoa = require('../models/dataDoa');
var fetchy = require('../fetches/fetch');

const config = require('../config');

var router = Router({
	prefix: '/data'
});

//http://api.zoopla.co.uk/api/v1/property_listings.xml?
router.get(`/`, async(cnx, next) => { 
    var url = 'http://api.zoopla.co.uk/api/v1/property_listings.json?'
    var key = 'api_key=3a5dzbqgwhu6tcbxd32ex3vv'
    var city = 'postcode=cv24ha'
    var result = await fetchy.getData(url+city+'&'+key)
    // var url = 'http://api.zoopla.co.uk/api/v1/property_listings.xml?'
    // const response = await fetch(url, {
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'api_key': '3a5dzbqgwhu6tcbxd32ex3vv',
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //         'area': 'coventry'
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    // });
      
    //   return await response.json(); // parses JSON response into native JavaScript objects

    console.log(result)

});

module.exports = router;