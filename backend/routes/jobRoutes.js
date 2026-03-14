const express = require("express")
const { getJobStatus, getJobResult } = require("../controllers/jobController")

const router = express.Router()

router.get("/job/:id", getJobStatus)
router.get("/result/:id", getJobResult)

module.exports = router