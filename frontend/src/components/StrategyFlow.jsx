import { steps } from "../data/stepsData"
import StepCard from "./StepCard"

function StrategyFlow() {

  return (

    <div style={{
      padding:"80px 20px",
      background:"#f8f9fc",
      textAlign:"center"
    }}>

      <h1 style={{ fontSize:"40px" }}>
        How It Works
      </h1>

      <p style={{ color:"#666" }}>
        Our platform processes your files in a distributed system
      </p>

      <div style={{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        marginTop:"50px"
      }}>

        {steps.map(step => (
          <StepCard key={step.id} step={step}/>
        ))}

      </div>

    </div>

  )

}

export default StrategyFlow