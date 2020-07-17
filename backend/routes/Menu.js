const express = require("express")
const router = express.Router()
const multer = require("multer")
const menuController = require("../controllers/Menu")

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images/")
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + file.originalname)
	},
})

const upload = multer({ storage: storage })

router.post("/create", upload.single("imageUrl"), menuController.create)
router.get("/show", menuController.getAllData)

module.exports = router
