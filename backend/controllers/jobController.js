const pool = require("../config/db")

exports.getJobStatus = async (req, res) => {

  const jobId = req.params.id

  const result = await pool.query(
    "SELECT id,status FROM jobs WHERE id=$1",
    [jobId]
  )

  res.json(result.rows[0])
}

exports.getJobResult = async (req, res) => {

  const jobId = req.params.id

  const result = await pool.query(
    "SELECT result FROM jobs WHERE id=$1",
    [jobId]
  )

  res.json(result.rows[0])
}