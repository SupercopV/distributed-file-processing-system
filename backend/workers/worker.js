const { Worker } = require("bullmq")
const Redis = require("ioredis")
const fs = require("fs")
const pool = require("../config/db")

const connection = new Redis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null
})

const worker = new Worker(
  "file-processing",
  async (job) => {

    const { filePath, jobId } = job.data

    const text = fs.readFileSync(filePath, "utf8")

    const words = text.split(/\s+/).length
    const paragraphs = text.split("\n\n").length

    const result = {
      words,
      paragraphs
    }

    await pool.query(
      "UPDATE jobs SET status=$1, result=$2 WHERE id=$3",
      ["completed", result, jobId]
    )

  },
  { connection }
)