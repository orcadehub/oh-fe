import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import "./Internships.css";
import config from "../config";
const Internships = () => {
  const [internships, setInternships] = useState([]); // Store internships
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  // ✅ Fetch Internships from API
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(`${baseURL}/internship`, {
          headers: { "Content-Type": "application/json" }, // ✅ Ensure proper headers
          withCredentials: true, // ✅ Allow sending cookies/tokens
        });
        setInternships(response.data);
      } catch (error) {
        console.error("🚨 Error fetching internships:", error.response?.data || error.message);
        setError("Failed to load internships. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  return (
    <Container className="mt-5">
      {/* <h2 className="text-center mb-4">🔥 Available Internships</h2> */}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading internships...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="justify-content-center">
        {!loading && !error && internships.length === 0 && (  
          <div>
          <p className="text-center">We are working on it.</p>
          <p className="text-center">No internships available right now.</p>
          </div>
        )}

        {internships.map((internship) => (
          <Col md={12} key={internship._id} className="mb-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card className="internship-card shadow p-3">
                <Card.Body className="d-flex flex-wrap align-items-center justify-content-between">
                  {/* Company Logo */}
                  <div className="company-logo text-center">
                    <img src={internship.logo} alt={internship.company} width="100" height="100" />
                  </div>

                  {/* Internship Details */}
                  <div className="internship-details flex-grow-1 px-4">
                    <Card.Title className="fw-bold">{internship.role}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{internship.company}</Card.Subtitle>
                    <p>📍 {internship.location}</p>
                    <p>📆 {internship.duration || "N/A"}</p>
                    <p>💰 {internship.stipend || "Not Disclosed"}</p>
                  </div>

                  {/* Apply Button */}
                  <div className="apply-button">
                    <Button href={internship.applyLink} target="_blank" variant="primary" className="fw-bold px-4">
                      Apply Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Internships;
