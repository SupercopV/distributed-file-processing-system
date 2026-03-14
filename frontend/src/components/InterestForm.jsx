import { useState } from "react"
import API from "../services/api"

function InterestForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const submitForm = async () => {

    try {

      setLoading(true)

      await API.post("/interest", {
        name,
        email
      })

      alert("Interest submitted successfully!")

      setName("")
      setEmail("")

    } catch (error) {

      alert("Error submitting form")

    } finally {

      setLoading(false)

    }

  }

  return (

    <div style={{ textAlign: "center", marginTop: "60px" }}>

      <h2>I'm Interested</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <button onClick={submitForm}>
        {loading ? "Submitting..." : "Submit"}
      </button>

    </div>

  )
}

export default InterestForm