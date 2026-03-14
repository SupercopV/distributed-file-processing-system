import { useState, useEffect } from "react"
import axios from "axios"

function FileUpload() {

  const [file, setFile] = useState(null)
  const [jobId, setJobId] = useState(null)
  const [status, setStatus] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const uploadFile = async () => {

    const formData = new FormData()
    formData.append("file", file)

    setLoading(true)

    const response = await axios.post(
      "http://localhost:5000/api/upload",
      formData
    )

    setJobId(response.data.jobId)
    setLoading(false)

  }

  // Auto check job status
  useEffect(() => {

    if (!jobId) return

    const interval = setInterval(async () => {

      const res = await axios.get(
        `http://localhost:5000/api/job/${jobId}`
      )

      setStatus(res.data.status)

      if (res.data.status === "completed") {

        const resultRes = await axios.get(
          `http://localhost:5000/api/result/${jobId}`
        )

        setResult(resultRes.data.result)

        clearInterval(interval)

      }

    }, 3000)

    return () => clearInterval(interval)

  }, [jobId])

  return (

    <div style={{ textAlign:"center", marginTop:"80px" }}>

      <h2>Process a File</h2>

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <br/><br/>

      <button onClick={uploadFile}>
        Upload File
      </button>

      {loading && (
        <p style={{ marginTop:"10px" }}>
          Uploading file...
        </p>
      )}

      {jobId && (
        <div style={{ marginTop:"20px" }}>
          <p>Job ID: {jobId}</p>
          <p>Status: {status || "Processing..."}</p>
        </div>
      )}

      {status === "processing" && (
        <p>Processing file... ⏳</p>
      )}

      {result && (
        <div style={{ marginTop:"20px" }}>

          <h3>Result</h3>

          <p>Words: {result.words}</p>
          <p>Paragraphs: {result.paragraphs}</p>

        </div>
      )}

    </div>

  )

}

export default FileUpload