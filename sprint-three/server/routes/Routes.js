const express = require("express")
const router = express.Router()
const controller = require("../controller/Controller")

router.get ("/", controller.findVideo)

router.get("/:id", controller.getVideoID)

router.post("/", controller.uploadVideo)

module.exports = router