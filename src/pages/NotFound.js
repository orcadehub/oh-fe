import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import NotFoundIcon from "../assets/error.jpg"; // Replace with your own icon

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="not-found-container text-center">
      {/* Animated 404 Icon */}
      <motion.img
        src={NotFoundIcon}
        alt="404 Not Found"
        className="not-found-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Error Message */}
      <motion.h1
        className="not-found-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Oops! Page Not Found
      </motion.h1>

      <motion.p
        className="not-found-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        The page you are looking for doesn't exist.
      </motion.p>

      {/* Go Home Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </motion.div>
    </Container>
  );
};

export default NotFound;
