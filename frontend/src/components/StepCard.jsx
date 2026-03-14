import { motion } from "framer-motion"

function StepCard({ step }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{
        border: "1px solid #eee",
        padding: "25px",
        margin: "20px",
        borderRadius: "12px",
        width: "260px",
        background: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
      }}
    >

      <h3>Step {step.id}</h3>
      <h2>{step.title}</h2>
      <p>{step.description}</p>

    </motion.div>

  )

}

export default StepCard