import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import Logo from "../assets/log.png";

import Sign from "../assets/e-sign.png";
import "./CertiDesign.css";

const CertiDesign = ({ certificateDetails }) => {
  // Define the title and body text for different types of certificates
  const certificateData = {
    1: {
      title: "Internship Certificate",
      body: "This certificate is awarded in recognition of the successful completion of an internship program. The recipient has displayed excellent work ethic, contributed significantly to the projects, and acquired valuable skills in a professional environment.",
    },
    2: {
      title: "Marketing Certificate",
      body: "This certificate is awarded for the successful completion of a marketing course. The recipient has gained in-depth knowledge in marketing strategies, digital marketing tools, and demonstrated their ability to apply these concepts in real-world scenarios.",
    },
    default: {
      title: "Course Certificate",
      body: "This certificate is awarded in recognition of the successful completion of an intensive and comprehensive learning program. The recipient has demonstrated exceptional dedication, discipline, and intellectual rigor throughout their studies. Their commitment to excellence and perseverance in mastering the subject matter have equipped them with the necessary skills and knowledge to excel in their future endeavors.",
    },
  };

  // Determine the title and body text based on the type value (fallback to 'default' if no type)
  const certificateTitle =
    certificateData[certificateDetails.type]?.title ||
    certificateData.default.title;

  const certificateBody =
    certificateData[certificateDetails.type]?.body ||
    certificateData.default.body;

  console.log(certificateBody);
  debugger;
  return (
    <Container
      fluid
      className="certificate-container shadow-lg bg-dark-subtle"
      style={{ maxWidth: "60rem", minHeight: "43rem", marginTop: "20px" }}
    >
      <Row>
        {/* Key Skills Section */}
        <Col md={3} className="key-skills-section p-4 rounded-5">
          <Badge
            pill
            className="mb-3"
            style={{ backgroundColor: "#6A0DAD", color: "white" }}
          >
            SPECIALIZED TRAININGS
          </Badge>
          <h3>Key Skills</h3>
          <ListGroup variant="flush" className="mt-3">
            {certificateDetails.skills.map((skill, index) => (
              <ListGroup.Item
                key={index}
                className="text-white rounded-5"
                style={{ backgroundColor: "#6A0DAD" }}
              >
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Certificate Content Section */}
        <Col md={9} className="p-3">
          <Card className="certificate-content">
            <Card.Body>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <img
                  src={Logo}
                  alt="orcadehub"
                  className="orcadehub-logo"
                  height={50}
                />
                <span
                  style={{
                    color: "#6A0DAD",
                    fontWeight: "bolder",
                    fontSize: "30px",
                    marginLeft: "5px",
                  }}
                >
                  ORCADEHUB
                </span>
              </div>
              {/* Dynamically change the certificate title */}
              <h3 className="mt-3 text-center">{certificateTitle}</h3>
              <div className="mt-4">
                <h4 className="text-center">{certificateDetails.name}</h4>
                <p className="text-center">
                  has successfully completed the {certificateDetails.duration}{" "}
                  {certificateDetails.type === 1
                    ? "internship program in"
                    : "course and training in"}
                </p>

                <h3 className="text-center">{certificateDetails.course}</h3>

                {/* Conditional body based on certificate type */}
                <p>{certificateBody}</p>
              </div>
              <div className="mt-4 text-right">
                <div className="d-flex justify-content-around flex-wrap">
                  <div>
                    <img
                      src={Sign}
                      alt="Signature"
                      className="signature"
                      height={50}
                    />{" "}
                    <br />
                    <p className="text-center">
                      Gurram Ajith Kumar
                      <br />
                      Founder & CEO
                    </p>
                  </div>
                  <p className="text-center mt-5">
                    Issued on: {certificateDetails.issuedDate.split("T")[0]}{" "}
                    <br />
                    Certificate no.: {certificateDetails.certificateId}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  For certificate authentication, please visit{" "}
                  <a
                    href="https://www.orcadehub.com/LMS/certificates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to verify
                  </a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CertiDesign;
