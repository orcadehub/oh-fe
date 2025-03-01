import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Certificate = () => {
  const [input, setInput] = useState(""); // Store certificate ID, email, or phone
  const [shake, setShake] = useState(false); // ✅ State for shaking effect
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
    navigate(`/certificate/${input}`); // ✅ Redirect to certificate details
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <Container className="my-5">
        <motion.h2 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          🎓 Verify Your Certificate
        </motion.h2>

        {/* ✅ Search Bar */}
        <motion.div 
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}} 
          transition={{ duration: 0.5 }}
        >
          <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group className="mb-3">
              <Form.Label>Enter Certificate ID, Email, or Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Enter Certificate ID, Email, or Phone..."
                required
              />
            </Form.Group>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </motion.div>
          </Form>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Certificate;
