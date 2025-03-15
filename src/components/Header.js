import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../assets/log.png";
import "./Header.css"; // Import CSS file

const Header = () => {
  return (
    <div className="header-box sticky-top">
      <Navbar expand="lg" className="custom-navbar ">
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
              <Nav.Link href="/workshops">Workshops</Nav.Link>
              <Nav.Link href="/internships">Internships</Nav.Link>
              {/* <Nav.Link href="/jobs">Jobs</Nav.Link> */}
              <Nav.Link href="/certificates">Certificates</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>

            {/* LMS Portal Button */}
            <Button
              href="/lms"
              variant="primary"
              className="lms-button"
              style={{ backgroundColor: "#6a0dad" }}
            >
              Go to LMS
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
