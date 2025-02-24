import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaUsers, FaLaptopCode, FaBriefcase, FaUniversity, FaQuoteLeft } from "react-icons/fa";
import "./Home.css"; // Import CSS file

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Testimonials from Colleges
  const testimonials = [
    { 
      profile: "https://via.placeholder.com/50", // Replace with actual profile image URL 
      name: "Rajesh K.", 
      college: "MBU, Tirupati", 
      feedback: "OrcadeHub provided outstanding training sessions. Our students benefited immensely!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Sneha M.", 
      college: "SMCE, Guntur", 
      feedback: "The structured programs from OrcadeHub have significantly improved our placement rates!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Vikram R.", 
      college: "Vignan, Guntur", 
      feedback: "A great partner in enhancing our students' coding and professional skills!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Anusha P.", 
      college: "UCET, Guntur", 
      feedback: "The hands-on projects and real-world case studies helped me develop practical skills!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Kiran S.", 
      college: "CIET, Guntur", 
      feedback: "The interactive training methods and real-world projects made learning so much fun!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Meghana J.", 
      college: "KKR & KSR, Guntur", 
      feedback: "The expert mentorship and coding challenges boosted my confidence for job interviews!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Harish T.", 
      college: "ASKW, Guntur", 
      feedback: "OrcadeHub’s LMS is super interactive! Learning online has never been this structured and engaging." 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Pooja R.", 
      college: "MLEW, Guntur", 
      feedback: "The placement assistance and resume-building sessions were invaluable. I got placed!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Arjun V.", 
      college: "SVCET, Chittoor", 
      feedback: "I started with zero coding knowledge, but thanks to OrcadeHub, I’m now confident in web development!" 
    },
    { 
      profile: "https://via.placeholder.com/50",  
      name: "Divya S.", 
      college: "Mallareddy, Hyderabad", 
      feedback: "The live projects gave me the real-world exposure I needed. Best decision ever!" 
    }
  ];
  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

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
                    <Card.Title>200+</Card.Title>
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
                    <Card.Title>1000+</Card.Title>
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
                    <Card.Title>50+</Card.Title>
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
          <h2 className="text-center">What Colleges Say About Us</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
              <img 
            src={testimonial.profile} 
            alt={testimonial.name} 
            className="rounded-circle mb-3" 
            width="70" 
            height="70"
          />
          <h5>{testimonial.name}</h5>
          <p className="text-muted">{testimonial.college}</p>
          <p>"{testimonial.feedback}"</p>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

    </motion.div>
  );
};

export default Home;
