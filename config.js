const types = {
	integer: 'integer',
	text: 'text',
	datetime: 'datetime'
}

const attributes = {
	notnull: 'NOT NULL',
	pk: 'PRIMARY KEY'
}

exports.controller = {
	url:'10.0.77.18',
	routes:{
		sensor: '/pi/getSensorData',
		config: '/pi/configData',
		squirt: '/pi/squirt',
	}
}

exports.database = {
	databaseName: "the.db",
	tables: [
		{
			name: "settings_max",
			columns:[
				{
					name: "ID",
					type: types.integer,
					attributes: [
						attributes.notnull,
						attributes.pk
					]
				},
				{
					name: "moisture",
					type: types.integer,
					attributes: [
						attributes.notnull
					]
				},
				{
					name: "light",
					type: types.integer,
					attributes: [
						attributes.notnull
					]
				}
			],
			constraints:[
			]
		},
		{
			name: "data",
			columns:[
				{
					name: "ID",
					type: types.integer,
					attributes: [
						attributes.notnull,
						attributes.pk
					]
				},
				{
					name: "moisture",
					type: types.integer,
					attributes: [
						attributes.notnull
					]
				},
				{
					name: "light",
					type: types.integer,
					attributes: [
						attributes.notnull
					]
				},
				{
					name: "datetime",
					type: types.datetime,
					attributes: [
						attributes.notnull
					]
				}

			],
			constraints:[
			]

		}

	]
}
