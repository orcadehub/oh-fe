import React from "react";
import {
//   FaBook,
//   FaLaptopCode,
//   FaCertificate,
//   FaUsers,
  FaCalendarAlt,
  FaWhatsapp,
//   FaGraduationCap,
//   FaBriefcase,
//   FaChalkboardTeacher,
//   FaCode,
//   FaMedal,
} from "react-icons/fa";

import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
function Workshops() {
  const workshops = [
    {
      title: "3-Day HTML & CSS",
      date: "March 25 - March 27, 2025",
      mentor: "Ajith Kumar",
      link: "https://chat.whatsapp.com/xyz",
    },
    {
      title: "3-Day DSA using CPP",
      date: "April 10 - April 12, 2025",
      mentor: "Shivam",
      link: "https://chat.whatsapp.com/abc",
    },
    {
      title: "1-Day Mobile App Dev",
      date: "April 1, 2025",
      mentor: "Srinivas",
      link: "https://chat.whatsapp.com/def",
    },
  ];
  return (
    <div>
      <section className="workshops-section text-center py-5">
        <Container>
          {/* Section Title with Floating Effect */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            📅 Upcoming Workshops
          </motion.h2>

          {/* Certification Info */}
          <div className="mt-5">
            <h4>🔖 Licensed Certification Provided</h4>
            <p>
              Receive an officially licensed certificate upon successful
              completion.
            </p>
          </div>

          {/* Workshops Grid */}
          <Row className="mt-4">
            {workshops.map((workshop, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} // Press effect
                >
                  <Card className="shadow p-4 text-center">
                    {/* Animated Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }} // Smooth pulsing effect
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaCalendarAlt size={40} className="mb-3 text-primary" />
                    </motion.div>

                    {/* Workshop Title */}
                    <motion.h5
                      animate={{ scale: [1, 1.05, 1] }} // Zoom in-out effect
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {workshop.title}
                    </motion.h5>

                    {/* Start Date */}
                    <p className="text-muted">
                      <strong>📆 Start Date:</strong> {workshop.date}
                    </p>

                    {/* Mentor Name */}
                    <p className="text-muted">
                      <strong>👨‍🏫 Mentor:</strong> {workshop.mentor}
                    </p>

                    {/* Join Button with Animated Press Effect */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }} // Shrink effect on press
                    >
                      <Button
                        variant="success"
                        href={workshop.link}
                        target="_blank"
                      >
                        <FaWhatsapp /> Join Now
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Workshops;
