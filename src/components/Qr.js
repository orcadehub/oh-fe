import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";


const QRCodeGenerator = ({ amount }) => {
  const upiID = "azzumoon@ybl";
  const note = "Payment to ORCADEHUB";

  const generateUPILink = () => {
    return `upi://pay?pa=${upiID}&pn=ORCADEHUB&mc=&tid=&tr=&tn=${note}&am=${amount}&cu=INR`;
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h4>Scan to Pay</h4>
      <QRCodeCanvas value={generateUPILink()} size={200} />

      <p>Amount: ₹{amount}</p>
    </div>
  );
};

const EnrollModal = ({ showModal, handleClose, course }) => {
  const [selectedInstallment, setSelectedInstallment] = useState("full");
  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState(course.price);

  const handleInstallmentChange = (e) => {
    const option = e.target.value;
    setSelectedInstallment(option);

    if (option === "full") {
      setAmount(course.price);
    } else if (option === "two") {
      setAmount((course.price / 2).toFixed(2));
    } else if (option === "three") {
      setAmount((course.price / 3).toFixed(2));
    }
  };

  const handleProceed = () => {
    setShowQR(true);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enroll in {course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>📅 Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>💰 Price:</strong> ₹{course.price}
        </p>
        <p>
          <strong>🚀 Next Batch Starts:</strong> {course.batchStart}
        </p>
        <p>🔹 Secure your seat now and begin your learning journey with <strong>OrcadeHub!</strong></p>

        {/* Installment Dropdown */}
        <Form.Group controlId="installmentSelect">
          <Form.Label>Select Installment Plan:</Form.Label>
          <Form.Control as="select" value={selectedInstallment} onChange={handleInstallmentChange}>
            <option value="full">Full Payment (₹{course.price})</option>
            <option value="two">2 Installments (₹{(course.price / 2).toFixed(2)} per month)</option>
            <option value="three">3 Installments (₹{(course.price / 3).toFixed(2)} per month)</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="enroll-button" onClick={handleProceed}>
          Proceed to Payment
        </Button>
      </Modal.Footer>

      {/* Show QR Code after clicking Proceed */}
      {showQR && <QRCodeGenerator amount={amount} />}
    </Modal>
  );
};

export default EnrollModal;
