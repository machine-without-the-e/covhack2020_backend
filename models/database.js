const sqlite = require('sqlite-async')
const config = require('../config');


const createTables = async () => {
	let db = await sqlite.open(config.database.databaseName);

	const tables = config.database.tables;
	tables.forEach((table, index, arr)=>{
		const name = table.name;
		const columns = textColumns(table.columns);
		var constraints = "";
		if(table.constraints.length > 0){
			constraints = ", " + constraintsText(table.constraints);
		}
		
		const query = "CREATE TABLE IF NOT EXISTS " + name + " (" + columns + constraints + ");";
		//console.log(query)
		db.run(query);
	});
	db.close();
}


const textColumns = (columnArr) => {
	var columns = "";
	columnArr.forEach((column, index, arr) => {
		columns += column.name + " " + column.type + " " + column.attributes.join(" ");//add constraints
		(index < arr.length-1) ? columns += ", ": null;//add comma if not last one
	})
	return columns;
}

const constraintsText = (constraints) => {
	var constraintstext = "";
	constraints.forEach((constraint, index, arr) => {
		const table = constraint.table;
		const localCol = constraint.columnLocal;
		const col = constraint.column;
		constraintstext += "FOREIGN KEY ("+localCol+") REFERENCES "+ table + "("+col+")";
		(index < arr.length-1) ? constraintstext += ", " : null;//add comma if not last one
	});
	return constraintstext;
}


exports.createDatabase = async () => {
	await createTables();
}
