const express = require("express")
const router = express.Router()
const categoryController = require("../controllers/Category")

router.post("/create", categoryController.create)
router.post("/getAllData", categoryController.getAllCategory)

module.exports = router
