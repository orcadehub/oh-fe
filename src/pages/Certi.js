import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Button, Modal } from "react-bootstrap";
import axios from "axios";
import CertiDesign from "../components/CertiDesign"; // Import the certificate design component
import { useReactToPrint } from "react-to-print";
import { Eye } from "react-bootstrap-icons"; // ✅ Import Eye icon
import config from "../config"; 

const Certi = () => {
  const { certiid } = useParams(); // ✅ Get Certificate ID from URL
  const [loading, setLoading] = useState(true);
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false); // ✅ State for modal

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  // ✅ Fetch Certificate Data
  useEffect(() => {
    const fetchCertificate = async () => {
      setLoading(true);
      setError("");
      setCertificateData(null);

      try {
        const response = await axios.get(`${baseURL}/certificate/${certiid}`);
        if (response.data.success) {
          setCertificateData(response.data.certificate);
        } else {
          setError("❌ Certificate not found. Please check your input.");
        }
      } catch (err) {
        setError("❌ Error fetching certificate. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (certiid) fetchCertificate();
  }, [certiid]);

  // ✅ Print Certificate (Direct Print)
  const certiRef = useRef(); // Reference to the certificate
  const handlePrint = useReactToPrint({
    content: () => certiRef.current, // ✅ Ensure this is correctly referencing the certificate
    documentTitle: `Certificate-${certiid}`, // ✅ Set document title
    pageStyle: ` @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } } `, // ✅ Ensure colors print correctly
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

      {error && <Alert variant="danger">{error}</Alert>}

      {certificateData && (
        <>
          {/* ✅ Display User Certificate Details */}
          <div className="certificate-info mt-4 p-3 border rounded shadow-sm">
            <h4 className="fw-bold">{certificateData.name}</h4>
            <p><strong>Course:</strong> {certificateData.course}</p>
            <p><strong>Issued Date:</strong> {new Date(certificateData.issuedDate).toLocaleDateString()}</p>
            <p><strong>Duration:</strong> {certificateData.duration}</p>
          </div>

          {/* ✅ Preview Icon (Opens Modal) */}
          <div className="mt-3">
            <Button variant="outline-secondary" onClick={() => setShowPreview(true)}>
              <Eye size={24} className="me-2" /> Show Preview
            </Button>
          </div>

          {/* ✅ Certificate Wrapper for Printing */}
          <div ref={certiRef} style={{ padding: "20px", background: "white", display: "none" }}>
            <CertiDesign certificateDetails={certificateData} />
          </div>

          {/* ✅ Print Button */}
          <div className="mt-4">
            <Button variant="primary" className="me-3" onClick={handlePrint}>
              🖨 Print Certificate
            </Button>
          </div>

          {/* ✅ Modal for Certificate Preview */}
          <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Certificate Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CertiDesign certificateDetails={certificateData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPreview(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Certi;
