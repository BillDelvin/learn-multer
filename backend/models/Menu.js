const mongoose = require("mongoose")
const Schema = mongoose.Schema
const category = require("./Category")

const menuTable = new Schema({
	name: {
		type: String,
		required: true,
	},
	detail: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: category,
	},
	imageUrl: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model("menu", menuTable)
