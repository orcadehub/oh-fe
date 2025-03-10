import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Azzu from "../../assets/azzu.jpg";
import {
  FaBook,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaCalendarAlt,
  FaWhatsapp,
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
      name: "Ajith Kumar",
      role: "Lead Instructor",
      company: "OrcadeHub",
      image: Azzu,
    },
    {
      name: "John Doe",
      role: "Senior Developer",
      company: "Google",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "David Lee",
      role: "Software Engineer",
      company: "Amazon",
      image: "https://via.placeholder.com/150",
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
          <motion.h1 className="display-4">
            Empower Your Learning Journey
          </motion.h1>
          <motion.p className="lead">
            Join OrcadeHub LMS and gain hands-on experience with expert mentors.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }}>
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
                        {item.icon}
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

      {/* Mentors Section */}
      {/* 🌟 Meet Our Mentors */}
      <section className="mentors-section py-5">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures animation triggers only once
            className="text-center mb-4"
          >
            🌟 Meet Our Mentors
          </motion.h2>

          <Row className="mt-4">
            {mentors.map((mentor, index) => (
              <Col md={4} sm={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }} // Ensures animation triggers only once
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow text-center">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      src={mentor.image}
                      alt={mentor.name}
                      className="p-3 rounded-circle mx-auto d-block"
                      style={{ width: "100px", height: "100px" }}
                    />

                    <Card.Body>
                      <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                        viewport={{ once: true }}
                      >
                        {mentor.name}
                      </motion.h5>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        viewport={{ once: true }}
                        className="text-muted"
                      >
                        {mentor.role}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.6 }}
                        viewport={{ once: true }}
                        className="text-muted"
                      >
                        {mentor.company}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures animation triggers only once
            className="text-center mb-4"
          >
            🔥 Popular Courses 🔥
          </motion.h2>

          <Row>
            {popularCourses.map((course, index) => (
              <Col md={6} lg={4} key={course.id} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="course-card shadow">
                    <Card.Body>
                      <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        viewport={{ once: true }}
                        className="course-title"
                      >
                        {course.title}
                      </motion.h5>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                        viewport={{ once: true }}
                        className="text-muted"
                      >
                        By {course.instructor}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        viewport={{ once: true }}
                        className="course-rating"
                      >
                        ⭐ {course.rating}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          variant="success"
                          onClick={() => navigate(`/lms/courses/${course.id}`)}
                        >
                          Enroll Now
                        </Button>
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
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Ensures animation triggers only once
            className="mb-4"
          >
            Why Choose OrcadeHub?
          </motion.h2>

          {/* Section Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow p-4 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className="mb-3"
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.h5
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h5>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      viewport={{ once: true }}
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
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Triggers only once per scroll
          >
            Who Chooses OrcadeHub? 🎓
          </motion.h2>

          <Row className="mt-4">
            {whoChoosesUs.map((person, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }} // Triggers only once per scroll
                >
                  <Card className="shadow p-4">
                    {person.icon}
                    <motion.h5
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {person.title}
                    </motion.h5>

                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
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

      {/* 📅 Upcoming Workshops */}
      <section className="workshops-section text-center py-5">
        <Container>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            📅 Upcoming Workshops
          </motion.h2>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
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
          <Row className="mt-4">
            {workshops.map((workshop, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="shadow p-4 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                    >
                      <FaCalendarAlt size={40} className="mb-3 text-primary" />
                    </motion.div>

                    <motion.h5
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      viewport={{ once: true }}
                    >
                      {workshop.title}
                    </motion.h5>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.5 }}
                      viewport={{ once: true }}
                      className="text-muted"
                    >
                      <strong>📆 Start Date:</strong> {workshop.date}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.6 }}
                      viewport={{ once: true }}
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
