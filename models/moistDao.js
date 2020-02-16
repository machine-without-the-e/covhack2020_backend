const sqlite = require('sqlite-async')
const config = require('../config');

exports.getAll = async (controllerID) => {
	let db = await sqlite.open(config.database.databaseName);


	db.close();
}

