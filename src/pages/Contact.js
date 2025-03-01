import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ Correct import
import "./Contact.css"; // Custom styles

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef(); // ✅ Using useRef for better form handling

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvhz8nk", // ✅ Correct EmailJS Service ID
        "template_3u90ugg", // ✅ Correct EmailJS Template ID
        form.current, // ✅ Use form reference
        "2BmhEzCSZcC9e0qLc" // ✅ Correct EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("✅ Email sent successfully:", response);
          setSuccessMessage("✅ Your message has been sent successfully!");
          setErrorMessage("");
          form.current.reset(); // ✅ Reset form after successful submission
        },
        (error) => {
          console.error("❌ Email sending failed:", error);
          setErrorMessage("❌ Email sending failed. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="contact-container"
    >
      <Container>
        <h2 className="text-center contact-title">📩 Contact Us</h2>
        <p className="text-center">Need personal assistance? Fill out the form below and we'll get back to you soon!</p>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form ref={form} onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="user_name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="user_email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Phone Number</Form.Label>
                <Form.Control type="text" name="user_whatsapp" placeholder="+91 9876543210" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="user_message" required />
              </Form.Group>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="contact-button">
                  Send Message
                </Button>
              </motion.div>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
