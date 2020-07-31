const Sequelize = require("sequelize")
const db = require("../config/database")

const allTypes = db.define("utilisateurs", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	types: {
		type: Sequelize.STRING,
	},
	prenom: {
		type: Sequelize.STRING,
	},
	modifiers: {
		type: Sequelize.STRING,
	},
})

module.exports = allTypes
