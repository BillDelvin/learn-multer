var express = require("express")
var path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

var indexRouter = require("./routes/index")
const usersRouter = require("./routes/Users")
const menuRouter = require("./routes/Menu")
const categoryRouter = require("./routes/Category")

var app = express()
const mongooseConnection = process.env.DB_LOCAL
mongoose.connect(mongooseConnection, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
app.use(cors())
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/public/images", express.static("public"))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/menu", menuRouter)
app.use("/category", categoryRouter)

module.exports = app
