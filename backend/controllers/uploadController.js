const { addJob } = require("../services/queueService")
const pool = require("../config/db")

exports.uploadFile = async (req, res) => {

  const filePath = req.file.path

  const result = await pool.query(
    "INSERT INTO jobs (file_path, status) VALUES ($1,$2) RETURNING *",
    [filePath, "pending"]
  )

  const job = result.rows[0]

  await addJob({
    jobId: job.id,
    filePath
  })

  res.json({
    jobId: job.id,
    status: "pending"
  })

}