import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/log.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LmsHeader.css"; // Import CSS file

const LmsHeader = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLoggedIn(false);
    navigate("/lms/login"); // Redirect to login
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <div className="header-box sticky-top">
      <Navbar expand="lg" className="custom-navbar ">
        <Container>
          {/* Logo & Company Name */}
          <Navbar.Brand
            onClick={() => navigate("/lms")}
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img src={Logo} alt="OrcadeHub" className="logo" />
            <span className="company-name">ORCADEHUB LMS</span>
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* Courses Dropdown */}
              <NavDropdown title="Courses" id="courses-dropdown">
                <NavDropdown.Item onClick={() => navigate("/lms/courses")}>
                  All Courses
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/lms/workshops")}>
                  Workshops
                </NavDropdown.Item>
              </NavDropdown>

              {/* Internships Dropdown */}
              <NavDropdown title="Internships" id="internships-dropdown">
                <NavDropdown.Item onClick={() => navigate("/internships")}>
                  Available Internships
                </NavDropdown.Item>
                {/* <NavDropdown.Item onClick={() => navigate("/internships/applied")}>My Applications</NavDropdown.Item> */}
                {/* <NavDropdown.Item onClick={() => navigate("/internships/recommended")}>Recommended for You</NavDropdown.Item> */}
              </NavDropdown>

              {/* Certificates Dropdown */}
              <NavDropdown title="Certificates" id="certificates-dropdown">
                <NavDropdown.Item onClick={() => navigate("/certificates")}>
                  Verify Certificate
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/certificates")}>
                  Download Certificate
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/certificates/request")}
                >
                  Request Certificate
                </NavDropdown.Item>
              </NavDropdown>

              {/* Feed/Community Dropdown */}
              {/* <NavDropdown title="Community" id="community-dropdown">
              <NavDropdown.Item onClick={() => navigate("/lms/feed")}>Latest Feed</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/lms/discussions")}>Discussion Forums</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/lms/events")}>Upcoming Events</NavDropdown.Item>
            </NavDropdown> */}

              {/* Profile Button - Only Show When Logged In */}
              {isLoggedIn && (
                <Button
                  onClick={() => navigate("/lms/dashboard")}
                  style={{
                    backgroundColor: "#6a0dad",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Dashboard
                </Button>
              )}
            </Nav>

            {/* Show Login/Signup only if user is NOT logged in */}
            {!isLoggedIn && (
              <>
                <Button
                  onClick={() => navigate("/lms/login")}
                  variant="primary"
                  className="lms-button"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/lms/signup")}
                  variant="warning"
                  className="lms-button"
                >
                  Signup
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LmsHeader;
