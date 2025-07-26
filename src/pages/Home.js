import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaUsers, FaLaptopCode, FaBriefcase, FaUniversity, FaQuoteLeft } from "react-icons/fa";
import "./Home.css"; // Import CSS file
import Testi from "../components/Testi";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
      transition={{ duration: 1 }}
    >
  
  
      {/* Hero Section */}
      <section className="hero-section">
        <Container className="text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }} 
            className="hero-title"
          >
            Empowering Careers with <span>OrcadeHub</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1.2 }} 
            className="hero-subtitle"
          >
            Join our online courses, corporate training, and professional internship programs today!
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4 }}>
            <Button variant="primary" className="cta-button" href="/courses">Explore Courses</Button>
            <Button variant="outline-dark" className="cta-button" href="/contact">Hire Us</Button>
          </motion.div>
        </Container>
      </section>

      {/* Live Statistics Section */}
      <section className="stats-section">
        <Container>
          <Row className="text-center">
            <Col md={6} lg={3}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="stat-card">
                  <FaUsers className="stat-icon" />
                  <Card.Body>
                    <Card.Title>10,000+</Card.Title>
                    <Card.Text>Students Enrolled</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="stat-card">
                  <FaBriefcase className="stat-icon" />
                  <Card.Body>
                    <Card.Title>50+</Card.Title>
                    <Card.Text>Clients Served</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="stat-card">
                  <FaLaptopCode className="stat-icon" />
                  <Card.Body>
                    <Card.Title>200+</Card.Title>
                    <Card.Text>Successful Interns</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={6} lg={3}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Card className="stat-card">
                  <FaUniversity className="stat-icon" />
                  <Card.Body>
                    <Card.Title>20+</Card.Title>
                    <Card.Text>College Partnerships</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-section">
        <Container>
          <h2 className="text-center">What Students Say About Us</h2>
           <Testi/>
        </Container>
      </section>

    </motion.div>
  );
};

export default Home;