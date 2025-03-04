import React, { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./LmsAuth.css";
import config from "../../config";

const LmsAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/lms/login";

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const flipVariants = {
    hidden: { rotateY: isLogin ? -180 : 180, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
    exit: { rotateY: isLogin ? 180 : -180, opacity: 0 },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isLogin ? "/login" : "/register";
      const response = await axios.post(`${baseURL}${url}`, formData);
      toast.success(response.data.message);
      if (isLogin) {
        localStorage.setItem("token", response.data.token);
        navigate("/lms/dashboard"); // Redirect after login
        window.location.reload();
      } else {
        navigate("/lms/login"); // Redirect to login after registration
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="auth-container d-flex justify-content-center align-items-center">
      <motion.div
        className="auth-card"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={flipVariants}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="auth-content"
            >
              <h2 className="text-center">🔐 Welcome Back</h2>
              <p className="text-center">Login to continue</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
              </Form>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <span className="toggle-link" onClick={() => navigate("/lms/signup")}>
                  Sign Up
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="auth-content"
            >
              <h2 className="text-center">😎 Get Started</h2>
              <p className="text-center">Create an account</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="success" className="w-100" type="submit" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
                </Button>
              </Form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <span className="toggle-link" onClick={() => navigate("/lms/login")}>
                  Login
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default LmsAuth;
