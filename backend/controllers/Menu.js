const Menu = require("../models/Menu")
const Category = require("../models/Category")

module.exports = {
	create: (req, res) => {
		Menu.create({
			name: req.body.name,
			detail: req.body.detail,
			price: req.body.price,
			category: req.body.category,
			imageUrl: req.file && req.file.path,
		})
			.then((response) => {
				res.json(response)
			})
			.catch((err) => {
				res.json(err)
			})
	},
	getAllData: (req, res) => {
		Menu.find({})
			.populate("category")
			.then((response) => {
				res.json(response)
			})
			.catch((err) => {
				res.json(err)
			})
	},
}
