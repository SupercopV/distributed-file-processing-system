const { Queue } = require("bullmq")
const connection = require("../config/redis")

const fileQueue = new Queue("file-processing", { connection })

const addJob = async (data) => {

  const job = await fileQueue.add("process-file", data)

  return job
}

module.exports = { fileQueue, addJob }