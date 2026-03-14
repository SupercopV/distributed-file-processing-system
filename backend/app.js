const express = require("express")
const cors = require("cors")

const uploadRoutes = require("./routes/uploadRoutes")
const jobRoutes = require("./routes/jobRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", uploadRoutes)
app.use("/api", jobRoutes)

module.exports = app