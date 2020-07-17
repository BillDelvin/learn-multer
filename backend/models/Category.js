const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categoryTable = new Schema({
	name: {
		type: String,
		require: true,
	},
})

module.exports = mongoose.model("category", categoryTable)
