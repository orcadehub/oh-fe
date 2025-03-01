import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="footer"
    >
      <Container>
        <Row>
          {/* Company Info & Address */}
          <Col md={4} className="footer-section">
            <h5>📍 Branch Locations</h5>
            <p><FaMapMarkerAlt /> <strong>Main Branch:</strong> Tirupati</p>
            <p><FaMapMarkerAlt /> <strong>Second Branch:</strong> Guntur</p>
          </Col>

          {/* Contact Details */}
          <Col md={4} className="footer-section">
            <h5>📞 Contact</h5>
            <p><FaPhone /> <strong> Ajith Kumar ( CEO ):</strong> +91 7093012101</p>
            <p><FaPhone /> <strong> Srinivas ( R&D ):</strong> +91 96182 27559</p>
            <p><FaPhone /> <strong> Chandrika ( Director ):</strong> +91 8688439185</p>
            <p><FaEnvelope /> <strong>Email:</strong> <a href="mailto:ceo@orcadehub.com">ceo@orcadehub.com</a></p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-section">
            <h5>🔗 Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/certifications">Certifications</a></li>
              <li><a href="/internships">Internships</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/lms">LMS Portal</a></li>
            </ul>
          </Col>
        </Row>

        {/* Social Media & Copyright */}
        <Row className="footer-bottom">
          <Col md={6}>
            <p>© {new Date().getFullYear()} OrcadeHub. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="social-icons">
            <a href="#" target="_blank"><FaLinkedin /></a>
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
