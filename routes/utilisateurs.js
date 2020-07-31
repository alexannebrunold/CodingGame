const express = require("express")
const router = express.Router()
const db = require("../config/database")
const allTypes = require("../models/allTypes")
const Ludus = require("../models/ludus")
const ludus = require("../models/ludus")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

//Get utilisateurs list
router.get("/", (req, res) =>
	allTypes
		.findAll({
			attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("types")), "types"]],
		})
		.then((utilisateurs) =>
			res.render("utilisateurs", {
				utilisateurs,
			})
		)
		.catch((err) => res.render("error", { error: err }))
)

//Display add gigform
router.get("/add", (req, res) => res.render("add"))

//Get utilisateurs list
router.get("/ludus", (req, res) =>
	Ludus.findAll()
		.then((ludus) =>
			res.render("ludus", {
				ludus,
			})
		)
		.catch((err) => res.render("error", { error: err }))
)

//Add a utilisateur
router.post("/", (req, res) => {
	let { types } = req.body
	let errors = []

	// Validate Fields
	if (types > 3) {
		errors.push({ text: "Please add a title" })
	}
	// Check for errors
	if (errors.length > 0) {
		res.render("add", {
			errors,
			types,
		})

		types = types.toLowerCase().replace(/,[ ]+/g, ",")

		// Insert into table
		allTypes
			.create({
				types,
				prenom,
				modifiers,
			})
			.then((utilisateurs) => res.redirect("/add"))
			.catch((err) => res.render("error", { error: err.message }))
	}
})

// Insert into table

//Routes
// module.exports = {
// 	register: function (req, res) {
// 		var type = req.body.types
// 	},
// 	login: function (req, res) {},
// }

module.exports = router
