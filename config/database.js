const Sequelize = require("sequelize")
module.exports = new Sequelize("testBDD", "root", "root", {
	localhost: "127.0.0.1",
	host: "localhost",
	port: "8889",
	dialect: "mysql",
	socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
	define: {
		timestamps: false,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})
