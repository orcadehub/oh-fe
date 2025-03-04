import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {
  FaBook,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./LmsHome.css"; // Import your CSS file
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaUserTie,
  FaAward,
  FaGift,
  FaLockOpen,
  FaGlobe,
} from "react-icons/fa";
import Testi from "../../components/Testi";

const LmsHome = () => {
  const navigate = useNavigate();

  // Sample popular courses (Ideally, fetch from API)
  const popularCourses = [
    {
      title: "MERN Stack Development",
      instructor: "Ajith Kumar",
      rating: "⭐⭐⭐⭐⭐",
      id: "mern-stack ",
    },
    {
      title: "React Native Development",
      instructor: "Srinivas",
      rating: "⭐⭐⭐⭐⭐",
      id: 2,
    },
    {
      title: "Data Structures using Python",
      instructor: "Ajith Kumar",
      rating: "⭐⭐⭐⭐⭐",
      id: 3,
    },
  ];

  const features = [
    {
      icon: <FaBook size={40} />,
      title: "Comprehensive Courses",
      desc: "Learn from industry experts.",
      delay: 0.1,
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Internships",
      desc: "Gain hands-on experience with real-world projects.",
      delay: 0.2,
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Resume Building",
      desc: "Get professional resume assistance to stand out.",
      delay: 0.3,
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Mock Interviews",
      desc: "Prepare with expert-led mock interviews.",
      delay: 0.4,
    },
    {
      icon: <FaAward size={40} />,
      title: "Placement Guarantee",
      desc: "Get placed with our 100% job assistance.",
      delay: 0.5,
    },
    {
      icon: <FaGift size={40} />,
      title: "Surprise Gifts",
      desc: "Receive special rewards & gifts from OrcadeHub.",
      delay: 0.6,
    },
    {
      icon: <FaAward size={40} />,
      title: "100% Course Fee Refund",
      desc: "Top students get a full fee refund.",
      delay: 0.7,
    },
    {
      icon: <FaLockOpen size={40} />,
      title: "Lifetime LMS Access",
      desc: "Enjoy free lifetime access to our LMS portal.",
      delay: 0.8,
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Exclusive Courses",
      desc: "Get free access to Python, Java, DSA, and more.",
      delay: 0.9,
    },
  ];

  const workshops = [
    {
      title: "3-Day HTML & CSS",
      date: "March 10 - March 15, 2025",
      link: "https://chat.whatsapp.com/xyz",
    },
    {
      title: "3-Day DSA using Python",
      date: "March 18 - March 23, 2025",
      link: "https://chat.whatsapp.com/abc",
    },
    {
      title: "1-Day Mobile App Dev",
      date: "March 25 - March 30, 2025",
      link: "https://chat.whatsapp.com/def",
    },
  ];

  return (
    <div className="lms-home">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          {/* Animated Heading */}
          <motion.h1
            className="display-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empower Your Learning Journey
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join OrcadeHub LMS and gain hands-on experience with expert mentors.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <Container>
          <Row className="text-center">
            <Col
              md={3}
              sm={6}
              onClick={() => navigate("/lms/courses")}
              className="feature-card"
            >
              <FaBook size={40} />
              <h5 className="mt-2">Online Courses</h5>
            </Col>
            <Col
              md={3}
              sm={6}
              onClick={() => navigate("/internships")}
              className="feature-card"
            >
              <FaLaptopCode size={40} />
              <h5 className="mt-2">Internships</h5>
            </Col>
            <Col
              md={3}
              sm={6}
              onClick={() => navigate("/certificates")}
              className="feature-card"
            >
              <FaCertificate size={40} />
              <h5 className="mt-2">Certifications</h5>
            </Col>
            <Col
              md={3}
              sm={6}
              onClick={() => navigate("/community")}
              className="feature-card"
            >
              <FaUsers size={40} />
              <h5 className="mt-2">Community</h5>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Popular Courses */}
      <section className="courses-section">
        <Container>
          <h2 className="text-center">🔥 Popular Courses 🔥 </h2>
          <Row>
            {popularCourses.map((course) => (
              <Col md={6} lg={4} key={course.id}>
                <Card className="course-card">
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Subtitle className="text-muted">
                      By {course.instructor}
                    </Card.Subtitle>
                    <Card.Text>{course.rating}</Card.Text>
                    <Button
                      variant="success"
                      onClick={() => navigate(`/lms/courses/${course.id}`)}
                    >
                      Enroll Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section text-center py-5">
        <Container>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            Why Choose OrcadeHub LMS?
          </motion.h2>

          {/* Section Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-5"
          >
            🚀 Hands-on projects | 🏆 Certifications | 📚 Expert Mentorship | 🔥
            Placement Assistance
          </motion.p>

          {/* Features Grid */}
          <Row>
            {features.map((feature, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow p-4 text-center">
                    <div className="mb-3">{feature.icon}</div>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Upcoming Workshops */}
      <section className="workshops-section text-center py-5">
        <Container>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            📅 Upcoming Workshops
          </motion.h2>

            {/* Additional Info */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-5"
          >
            <h4>🔖 Licensed Certification Provided</h4>
            <p>
              Receive an officially licensed certificate upon successful
              completion.
            </p>

            <h4>👨‍🏫 Mentor: Ajith Kumar</h4>
            <p>
              Learn from an experienced instructor guiding you through
              real-world projects.
            </p>
            
          </motion.div>

          {/* Workshops Grid */}
          <Row>
            {workshops.map((workshop, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow p-4 text-center">
                    <FaCalendarAlt size={40} className="mb-3 text-primary" />
                    <h5>{workshop.title}</h5>
                    <p>
                      <strong>📆 Start Date:</strong> {workshop.date}
                    </p>
                    <Button
                      variant="success"
                      href={workshop.link}
                      target="_blank"
                    >
                      <FaWhatsapp /> Join Now
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

        
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section text-center">
        <Container>
          <h2>🎤 Student Testimonials</h2>
          <Testi />
        </Container>
      </section>

      {/* Community Section */}
      <section className="community-section text-center">
        <Container>
          <h2>💬 Join Our Community</h2>
          <p>Engage with learners and mentors on our discussion forums.</p>
          <Button variant="info" href="https://chat.whatsapp.com/HuOhI7DyPecKN22scxTtT4">
            Join Now
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <Container>
          <p>
            © {new Date().getFullYear()} OrcadeHub LMS 
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default LmsHome;
