import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const Certificate = () => {
  const [input, setInput] = useState(""); // Store certificate ID, email, or phone
  const [shake, setShake] = useState(false); // ✅ State for shaking effect
  const [error, setError] = useState(false); // ✅ Error state
  const navigate = useNavigate(); // ✅ Navigation hook

  // ✅ Handle Input Change
  const handleChange = (e) => setInput(e.target.value);

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove shake effect after 0.5s
      return;
    }

    // Dummy check for invalid ID (in real case, you would fetch data)
    if (input !== "validID") {
      setError(true);
      return;
    }

    setError(false);
    navigate(`/certificate/${input}`); // ✅ Redirect to certificate details
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="my-5">
        {/* ✅ Title Animation */}
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          🎓 Verify Your Certificate
        </motion.h2>

        {/* ✅ Search Bar */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Form onSubmit={handleSubmit} className="text-center">
              <Form.Group className="mb-3">
                <Form.Label>
                  Enter Certificate ID, Email, or Phone Number
                </Form.Label>
                <Form.Control
                  type="text"
                  value={input}
                  onChange={handleChange}
                  placeholder="Enter Certificate ID, Email, or Phone..."
                  required
                />
              </Form.Group>

              {/* ✅ Submit Button with Animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -3, 0], // Subtle bounce effect
                  transition: { repeat: Infinity, duration: 2 },
                }}
              >
                <Button variant="success" type="submit" className="w-100">
                  Submit
                </Button>
              </motion.div>
            </Form>
          </motion.div>
        </motion.div>

        {/* ✅ Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Alert variant="danger" className="mt-3 text-center">
              ❌ No certificate found!
              <br />
              Click below to get your certificate in 1 hour.
            </Alert>
          </motion.div>
        )}

        {/* ✅ Get Certificate Section */}
        <motion.div
          className="text-center mt-4 p-3 border rounded bg-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="fw-bold text-dark mb-2">
            Don't have a certificate yet? No worries!
          </h3>
          <p className="text-muted mb-3">
            Get a verified certificate for any domain instantly! Choose from
            1-month, 3-month, or 6-month certifications and boost your career.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -2, 0], // Subtle up-down motion
              transition: { repeat: Infinity, duration: 2 },
            }}
          >
            <Button
              variant="success"
              style={{backgroundColor:'#6a0dad'}}
              onClick={() => navigate("/certificates/request")}
            >
              📜 Get Your Certificate Now!
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Certificate;
