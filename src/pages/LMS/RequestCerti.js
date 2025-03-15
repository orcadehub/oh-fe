import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function RequestCerti() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [domain, setDomain] = useState("");
  const [shake, setShake] = useState(false);

  const handleRequest = () => {
    if (!selectedPlan || !domain.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const whatsappMessage = `Hello, I would like to request a ${selectedPlan} certificate for the domain: ${domain}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917093012101?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mt-5"
    >
      {/* Header Animation */}
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        Request Your Certificate
      </motion.h2>
      <p className="text-center text-muted">
        Choose a plan and get certified in any domain.
      </p>

      <div className="row justify-content-center">
        {[
          { plan: "1 Month", price: 199, color: "primary" },
          { plan: "3 Months", price: 499, color: "success" },
          { plan: "6 Months", price: 999, color: "danger" },
        ].map(({ plan, price, color }, index) => (
          <motion.div
            key={plan}
            className="col-md-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className={`card text-center ${
                selectedPlan === plan ? `border-${color} shadow-lg` : ""
              }`}
              onClick={() => setSelectedPlan(plan)}
              style={{ cursor: "pointer", transition: "0.3s" }}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -3, 0], // Small bouncing effect
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{plan} Certificate</h5>
                <h4 className={`text-${color}`}>₹{price}</h4>
                <p className="card-text">
                  {plan === "1 Month"
                    ? "Valid for 1 year"
                    : plan === "3 Months"
                    ? "Valid for 3 years"
                    : "Lifetime Validity"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Domain Input */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.input
          type="text"
          className="form-control mx-auto w-50 p-2 border rounded"
          placeholder="Enter domain (e.g., Web, Cyber, AI & ML, etc.)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Request Button */}
      <motion.div className="text-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { repeat: Infinity, duration: 2 },
          }}
          className="btn mb-3 text-light"
          style={{backgroundColor:'#6a0dad'}}
          onClick={handleRequest}
        >
          📜 Request Certificate Now!
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default RequestCerti;
