import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Azzu from "../../assets/azzu.jpg";
import Basha from "../../assets/basha.jpeg";
import Shivam from "../../assets/shivam.jpg";
import {
  FaBook,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  // FaCalendarAlt,
  // FaWhatsapp,
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardTeacher,
  FaCode,
  FaMedal,
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
import Workshops from "../../components/LMS/Workshops";

const LmsHome = () => {
  const navigate = useNavigate();

  // Sample popular courses (Ideally, fetch from API)
  const popularCourses = [
    {
      title: "MERN Stack Development",
      instructor: "Ajith Kumar",
      rating: "⭐⭐⭐⭐",
      id: "mern-stack ",
    },
    {
      title: "React Native Development",
      instructor: "Srinivas",
      rating: "⭐⭐⭐⭐",
      id: "react-native",
    },
    {
      title: "Data Structures using C++",
      instructor: "Shivam",
      rating: "⭐⭐⭐⭐",
      id: "cpp-dsa",
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

  

  const whoChoosesUs = [
    {
      title: "Final Year Students",
      description: "Aiming for the highest packages.",
      icon: <FaGraduationCap size={40} className="text-primary" />,
    },
    {
      title: "Job Seekers",
      description: "Struggling to get placement? We got you!",
      icon: <FaBriefcase size={40} className="text-danger" />,
    },
    {
      title: "2nd & 3rd Year Students",
      description: "Gain advanced skills before anyone else.",
      icon: <FaUserTie size={40} className="text-success" />,
    },
    {
      title: "Internship Seekers",
      description: "Looking for industry experience? Start now!",
      icon: <FaCode size={40} className="text-warning" />,
    },
    {
      title: "Teachers (Non-IT to IT)",
      description: "Want to shift to IT? We make it easy.",
      icon: <FaChalkboardTeacher size={40} className="text-info" />,
    },
    {
      title: "Educators",
      description: "Enhance your programming & development skills.",
      icon: <FaUsers size={40} className="text-secondary" />,
    },
  ];

  const stats = [
    {
      title: "Students Enrolled",
      count: "5,000+",
      icon: <FaBook size={40} className="text-primary" />,
    },
    {
      title: "Internships Provided",
      count: "1,200+",
      icon: <FaBriefcase size={40} className="text-success" />,
    },
    {
      title: "Certificates Issued",
      count: "3,500+",
      icon: <FaCertificate size={40} className="text-warning" />,
    },
    {
      title: "Workshops Conducted",
      count: "50+",
      icon: <FaChalkboardTeacher size={40} className="text-danger" />,
    },
    {
      title: "Community Members",
      count: "10,000+",
      icon: <FaUsers size={40} className="text-info" />,
    },
    {
      title: "Clients Satisfied",
      count: "200+",
      icon: <FaMedal size={40} className="text-secondary" />,
    },
  ];

  const mentors = [
    {
      name: "G. Ajith Kumar",
      role: "CEO & Lead Developer",
      company: "ORCADEHUB",
      image: Azzu,
      description:
        "Expert in MERN Stack development with 3+ years of experience.Trained more than 10000+ students.",
    },
    {
      name: "K. Srinivasa Reddy",
      role: "Lead Developer",
      company: "ORCADEHUB",
      image: Basha,
      description:
        "Expert in MERN Stack development with 3+ years of experience.Trained more than 10000+ students.",
    },
    {
      name: "Shivam Chanchal",
      role: "Techinical Lead",
      company: "ORCADEHUB",
      image: Shivam,
      description:
        " Cracked ICPC Reginals Amritapuri, Solved more then 3000+ question across all coding platform.",
    },
  ];

  return (
    <div className="lms-home">
      {/* Hero Section */}
      <motion.section
        className="hero-section text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          {/* Infinite Floating Effect */}
          <motion.h1
            className="display-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Empower Your Learning Journey
          </motion.h1>

          <motion.p
            className="lead"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            Join OrcadeHub LMS and gain hands-on experience with expert mentors.
          </motion.p>

          {/* Button with Hover Pulse Effect */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="primary" onClick={() => navigate("/courses")}>
              Explore Courses
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Key Features */}
      <section className="features-section">
        <Container>
          <Container className="text-center py-5">
            {/* Feature Section */}
            <Row className="mb-4">
              {[
                {
                  icon: <FaBook size={40} />,
                  text: "Online Courses",
                  path: "/lms/courses",
                },
                {
                  icon: <FaLaptopCode size={40} />,
                  text: "Internships",
                  path: "/internships",
                },
                {
                  icon: <FaCertificate size={40} />,
                  text: "Certifications",
                  path: "/certificates",
                },
                // {
                //   icon: <FaUsers size={40} />,
                //   text: "Community",
                //   path: "/community",
                // },
              ].map((item, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={6}
                  className="feature-card"
                  onClick={() => navigate(item.path)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -5, 0], // Smooth floating motion
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {item.icon}
                    <h5 className="mt-2">{item.text}</h5>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Statistics Section */}
            <section className="stats-section py-4 bg-light">
              <Container>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  📊 Our Achievements
                </motion.h2>
                <Row className="mt-4">
                  {stats.map((item, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shadow p-4 rounded bg-white"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1], // Pulse effect
                            transition: { duration: 1.5, repeat: Infinity },
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <h3 className="mt-2">{item.count}</h3>
                        <p className="text-muted">{item.title}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          </Container>
        </Container>
      </section>

      {/* 📅 Upcoming Workshops */}
      <Workshops/>

      {/* Mentors Section */}
      {/* 🌟 Meet Our Mentors */}
      <section className="mentors-section py-5">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }} // Infinite smooth fade-in
            className="text-center mb-4"
          >
            🌟 Meet Our Mentors
          </motion.h2>

          <Row className="mt-4">
            {mentors.map((mentor, index) => (
              <Col md={4} sm={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow text-center p-3">
                    <motion.img
                      animate={{
                        scale: [1, 1.05, 1], // Infinite pulse effect
                        transition: { duration: 2, repeat: Infinity },
                      }}
                      src={mentor.image}
                      alt={mentor.name}
                      className="rounded-circle mx-auto d-block"
                      style={{ width: "150px", height: "150px" }}
                    />

                    <Card.Body>
                      <motion.h5
                        animate={{
                          y: [0, -2, 0], // Floating effect
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {mentor.name}
                      </motion.h5>

                      <motion.p
                        animate={{
                          opacity: [1, 0.8, 1], // Fading effect
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        className="text-muted fw-bold"
                      >
                        {mentor.role}
                      </motion.p>

                      <motion.p
                        animate={{
                          rotate: [0, 1, -1, 0], // Slight rotation effect
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="text-muted"
                      >
                        {mentor.company}
                      </motion.p>

                      <motion.p
                        animate={{
                          scale: [1, 1.02, 1], // Gentle breathing effect
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        className="text-secondary"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {mentor.description}
                      </motion.p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Courses */}
      <section className="courses-section py-5">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-center mb-4"
          >
            🔥 Popular Courses 🔥
          </motion.h2>

          <Row>
            {popularCourses.map((course, index) => (
              <Col md={6} lg={4} key={course.id} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="course-card shadow">
                    <Card.Body>
                      <motion.h5
                        animate={{
                          y: [0, -2, 0],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="course-title"
                      >
                        {course.title}
                      </motion.h5>

                      <motion.p
                        animate={{
                          opacity: [1, 0.8, 1],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                        className="text-muted"
                      >
                        By {course.instructor}
                      </motion.p>

                      <motion.p
                        animate={{
                          rotate: [0, 1, -1, 0],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="course-rating"
                      >
                        ⭐ {course.rating}
                      </motion.p>

                      <motion.div
                        animate={{
                          scale: [1, 1.02, 1],
                          transition: { duration: 2, repeat: Infinity },
                        }}
                      >
                        <motion.button
                          className="btn btn-success"
                          onClick={() => navigate(`/lms/courses/${course.id}`)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9, y: 2 }} // Press effect
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          Enroll Now
                        </motion.button>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section text-center py-5">
        <Container>
          {/* Floating Section Title with Smooth Entry */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }} // Ensures it fades in properly
            animate={{ opacity: 1, y: [0, -5, 0, 5, 0] }} // Floating effect restored
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Re-added transition
            className="mb-4"
          >
            Why Choose OrcadeHub?
          </motion.h2>

          {/* Section Subtitle with Gentle Pulsing */}
          <motion.p
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: [1, 0.8, 1] }} // Smooth pulsing
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
                  initial={{ opacity: 0, y: 10 }} // Now fades in properly
                  whileInView={{ opacity: 1, y: 0 }} // Ensures scroll effect works
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }} // Trigger only once per scroll
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow p-4 text-center">
                    {/* Icon - Now properly aligned and straight */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 0, 0] }} // No rotation
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "center" }} // Ensures stable scaling
                      className="mb-3"
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title with Zooming Effect */}
                    <motion.h5
                      animate={{ scale: [1, 1.05, 1] }} // Expanding & contracting
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {feature.title}
                    </motion.h5>

                    {/* Description with Gentle Left-Right Swing */}
                    <motion.p
                      animate={{ x: [-2, 2, -2] }} // Tiny horizontal movement
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {feature.desc}
                    </motion.p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 🎓 Who Chooses Us */}
      <section className="who-chooses-us py-5 bg-light">
        <Container>
          {/* Floating Title with Proper Fade-In */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -5, 0, 5, 0] }} // Floating effect restored
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-center"
          >
            Who Chooses OrcadeHub? 🎓
          </motion.h2>

          <Row className="mt-4">
            {whoChoosesUs.map((person, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} // Now properly fades in on scroll
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }} // Ensures it only triggers once per scroll
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow p-4">
                    {/* Pulsing Icon (Now perfectly straight) */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 0, 0] }} // No rotation
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ transformOrigin: "center" }} // Keeps alignment stable
                      className="mb-3"
                    >
                      {person.icon}
                    </motion.div>

                    {/* Slightly Zooming Title */}
                    <motion.h5
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {person.title}
                    </motion.h5>

                    {/* Gentle Swaying Text Effect */}
                    <motion.p
                      animate={{ x: [-2, 2, -2] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-muted"
                    >
                      {person.description}
                    </motion.p>
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

      {/* 💬 Community Section */}
      <section className="community-section text-center py-5">
        <Container>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            💬 Join Our Community
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-muted"
          >
            Engage with learners and mentors on our discussion forums.
          </motion.p>

          {/* Join Now Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="info"
              href="https://chat.whatsapp.com/HuOhI7DyPecKN22scxTtT4"
              target="_blank"
              className="px-4 py-2 mt-3"
            >
              Join Now
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <Container>
          <p>© {new Date().getFullYear()} OrcadeHub LMS</p>
        </Container>
      </footer>
    </div>
  );
};

export default LmsHome;
