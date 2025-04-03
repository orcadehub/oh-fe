import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Internships.css";
import Logo from "../assets/log.png";

const Internships = () => {
  const internships = [
    {
      _id: "1",
      title: "Full Stack Development Internship",
      role: "Full Stack Developer",
      company: "OrcadeHub",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "3",
      title: "UI/UX Design Internship",
      role: "UI/UX Designer",
      company: "OrcadeHub",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "4",
      title: "Frontend Development Internship",
      role: "Frontend Developer",
      company: "OrcadeHub",
      skills: ["HTML", "CSS", "JavaScript","Bootstrap", "React", "Redux"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "5",
      title: "Backend Development Internship",
      role: "Backend Developer",
      company: "OrcadeHub",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "6",
      title: "Database Management Internship",
      role: "Database Management (MongoDB)",
      company: "OrcadeHub",
      skills: ["MongoDB", "Mongoose", "NoSQL", "Database Optimization"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "7",
      title: "MERN Stack Development Internship",
      role: "MERN Stack Developer",
      company: "OrcadeHub",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Full Stack Development"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "8",
      title: "React Native Development Internship",
      role: "React Native Developer",
      company: "OrcadeHub",
      skills: ["React Native", "Expo", "Android/iOS Development", "Redux"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
  ];

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleDurationChange = (internship, duration) => {
    setSelectedInternship(internship);
    setSelectedDuration(duration);
    setShowModal(true);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🔥 Available Virtual Internships</h2>

      <Row className="justify-content-center">
        {internships.map((internship) => (
          <Col lg={4} md={6} sm={12} key={internship._id} className="mb-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card className="internship-card shadow p-3">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                <div className="company-logo">
                    <img src={Logo} alt={internship.company} width="80" height="80" />
                  </div>
                  <div className="internship-details mt-3">
                    <Card.Title className="fw-bold">{internship.role}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{internship.company}</Card.Subtitle>
                    <p className="fw-bold text-danger">{internship.price}</p>
                    <p className="skills"><strong>Skills:</strong> {internship.skills.join(", ")}</p>
                    <Form.Select
                      onChange={(e) => handleDurationChange(internship, e.target.value)}
                      className="mb-2"
                    >
                      <option value="">Select Duration</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="4 Months">4 Months</option>
                      <option value="6 Months">6 Months</option>
                    </Form.Select>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            To enroll in the <strong>{selectedInternship?.title}</strong> for {selectedDuration}, please send
            <strong> ₹49 </strong> to <strong>+91 7093012101</strong> via any UPI.
          </p>
          <p>
            After payment, send the screenshot via WhatsApp to proceed with the next step.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Internships;
