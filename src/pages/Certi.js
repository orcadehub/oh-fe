import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import CertiDesign from "../components/CertiDesign"; // Import the certificate design component
import { useReactToPrint } from "react-to-print";
import config from "../config";

const Certi = () => {
  const { certiid } = useParams(); // ✅ Get Certificate ID from URL
  const [loading, setLoading] = useState(true);
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [error, setError] = useState("");

  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;

  // ✅ Fetch Certificate Data
  useEffect(() => {
    const fetchCertificate = async () => {
      setLoading(true);
      setError("");
      setCertificateDetails(null);

      try {
        const response = await axios.get(`${baseURL}/certificate/${certiid}`);
        const certificate = response.data.data;
        console.log("API Response:", response.data);

        if (certificate) {
          setCertificateDetails(certificate);
        } else {
          setError("❌ Certificate not found. Please check your input.");
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("❌ Certificate not found. Please check your input.");
        } else {
          setError("❌ Error fetching certificate. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (certiid) fetchCertificate();
  }, [certiid, baseURL]);

  // ✅ Ref for Certificate
    const certiRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => certiRef.current,
      documentTitle: "Certificate",
    });



  return (
    <Container className="mt-5 text-center">
      <h2>📜 Certificate Details</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading certificate details...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
          <br />
          <Link to="/certificate">
            Go back to Certificate page to re-enter certificate ID
          </Link>
        </Alert>
      )}

      {certificateDetails && !loading && (
        <>
          {/* ✅ Display User Certificate Details */}
          <div className="certificate-info mt-4 p-3 border rounded shadow-sm">
            <h4 className="fw-bold">{certificateDetails.name}</h4>
            <p>
              <strong>Course:</strong> {certificateDetails.course}
            </p>
            <p>
              <strong>Issued Date:</strong>{" "}
              {new Date(certificateDetails.issuedDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Duration:</strong> {certificateDetails.duration}
            </p>
          </div>

{/* Download */}
          {/* <Row>
            <Col className="d-flex justify-content-center mt-3">
              <Button
                onClick={handlePrint}
                style={{ backgroundColor: "#6A0DAD" }}
              >
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
                    <Link to="/">
                      Go back to Certificate page to re-enter certificateID
                    </Link>
                  </Alert>
                </>
              )}
            </Col>
          </Row> */}
        </>
      )}
    </Container>
  );
};

export default Certi;
