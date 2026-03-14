import { motion } from "framer-motion"

function Hero() {

  return (

    <div style={{
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(135deg,#6c63ff,#4f46e5)",
      color: "white",
      padding: "20px"
    }}>

      <motion.h1
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        style={{ fontSize:"50px" }}
      >
        Smart File Processing Platform
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:0.5 }}
        style={{ marginTop:"10px", fontSize:"18px" }}
      >
        Upload documents, process them asynchronously, and get insights instantly.
      </motion.p>

      <motion.button
        whileHover={{ scale:1.1 }}
        style={{
          marginTop:"30px",
          padding:"12px 25px",
          border:"none",
          borderRadius:"8px",
          background:"white",
          color:"#4f46e5",
          fontWeight:"bold",
          cursor:"pointer"
        }}
      >
        Get Started
      </motion.button>

    </div>

  )

}

export default Hero