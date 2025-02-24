import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../assets/log.png";
import "./Header.css"; // Import CSS file

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        {/* Logo & Company Name */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={Logo} alt="OrcadeHub" className="logo" /> 
          <span className="company-name">ORCADEHUB</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/internships">Internships</Nav.Link>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/certificates">Certificates</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* LMS Portal Button */}
          <Button href="/lms" variant="primary" className="lms-button">
            Go to LMS
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
