const category = require("../models/Category")

module.exports = {
	create: (req, res, next) => {
		category
			.create({ 
				name: req.body.name 
			})
			.then((response) => {
				res.json(response)
			})
			.catch((err) => {
				res.json(err)
			})
	},
	getAllCategory: (req, res) => {
		category
			.find({})
			.then((response) => {
				res.json(response)
			})
			.catch((err) => {
				res.json(err)
			})
	},
}
