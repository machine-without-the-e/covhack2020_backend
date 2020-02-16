const sqlite = require('sqlite-async')
const config = require('../config');

exports.set = async (moisture, light) => {
	let db = await sqlite.open(config.database.databaseName);

	db.run('INSERT INTO setting (moisture, light) VALUES ('+moisture + ', ' + light + ');');
	db.run('UPDATE setting SET moisture=' + moisture + ', light=' + light + ' WHERE ID=1;');

	db.close();
}

