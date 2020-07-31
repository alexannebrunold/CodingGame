const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")
const Handlebars = require("handlebars")
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access")
// const apiRouter = require("./api")
const allTypes = require("./models/allTypes")

//Database
const db = require("./config/database")

//Test DB
db.authenticate()
	.then(() => console.log("Database connected..."))
	.catch((err) => console.log("Error : " + err))

const app = express()

//Handlebars
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main",
		extname: "handlebars",
		handlebars: allowInsecurePrototypeAccess(Handlebars),
	})
)
app.set("view engine", "handlebars")

//Set static folder
app.use(express.static(path.join(__dirname, "public")))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

//Gig routes
app.use("/utilisateurs", require("./routes/utilisateurs"))
app.use("/ludus", require("./routes/ludus"))
// app.get("/:types", (req, res, next) => {
// 	Gig.find({ _types: req.params.types })
// 		.then((types) => res.status(200).json(types))
// 		.catch((error) => res.status(404).json({ error }))
// })
// Index route
app.get("/", (req, res) => res.render("index", { layout: "landing" }))
const PORT = process.env.PORT || 7000

app.get("/", (req, res) => {
	// res.send("INDEX")
	res.setHeader("Content-Type", "text/html")
	res.status(200).send("<h1>Bienvenue</h1>")
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))
