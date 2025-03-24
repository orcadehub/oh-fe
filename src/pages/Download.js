import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CertiDesign from '../components/CertiDesign';
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import config from '../config';

const Download = ({ certId }) => {
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [error, setError] = useState("");

  const certiRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => certiRef.current,
    documentTitle: "Certificate",
  });

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  useEffect(() => {
    const fetchCertificateDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/certificate/${certId}`);
        alert("Downlaod")
        if (response.data && response.data.data) {
          setCertificateDetails(response.data.data);
        } else {
          setError("Certificate details not found");
        }
      } catch (error) {
        setError("Error fetching certificate details");
      }
    };

    fetchCertificateDetails();
  }, [certId,baseURL]);

  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <Button onClick={handlePrint} style={{backgroundColor:'#6A0DAD'}}>
            Click here to Download
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {certificateDetails ? (
            <>
              <div ref={certiRef}>
                <CertiDesign certificateDetails={certificateDetails} />
              </div>
             
            </>
          ) : (
            <>
              <Alert variant="danger" className="text-center">
                {error}
                <br />
                <Link to="/">Go back to Certificate page to re-enter certificateID</Link>
              </Alert>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
