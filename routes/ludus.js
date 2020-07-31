const express = require("express")
const router = express.Router()
const db = require("../config/database")
const Ludus = require("../models/ludus")

const Sequelize = require("sequelize")
const Op = Sequelize.Op

//Display add gigform
router.get("/", (req, res) =>
	res.status(200).json({
		message: "Get Ludus",
	})
)

//Get utilisateurs list
// router.post("/ludus", (req, res) =>
// 	Ludus.findAll()
// 		.then((ludus) =>
// 			res.render("ludus", {
// 				ludus,
// 			})
// 		)
// 		.catch((err) => res.render("error", { error: err }))
// )

router.post("/", (req, res) =>
	res.status(200).json({
		message: "Post Ludus",
	})
)

// router.get("/:ludusId", (req, res) => {
// 	const id = req.params.ludusId
// 	if (id === utilisateurs.types) {
// 		res.status(200).json({
// 			message: "Coucou",
// 			id: id,
// 		})
// 	} else {
// 		res.status(200).json({
// 			message: "No",
// 		})
// 	}
// })

module.exports = router
