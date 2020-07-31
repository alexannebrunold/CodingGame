const Sequelize = require("sequelize")
const db = require("../config/database")

const ludus = db.define("types", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	types: {
		type: Sequelize.STRING,
	},
})

module.exports = ludus
