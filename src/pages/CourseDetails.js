import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Modal,Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./CourseDetails.css";
import axios from "axios";
import config from "../config";
import courseData from './courseData';

const CourseDetails = () => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;

      const [installmentType, setInstallmentType] = useState("full");

      const handleEnrollClick = () => {
        const message = encodeURIComponent(
          `Hello sir, I want to enroll in ${course.title} and I want to choose the ${installmentType} installment type.`
        );
        window.open(`https://wa.me/917093012101?text=${message}`, "_blank");
      };

  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState([]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseURL}/orders`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        handleRazorpayScreen(response.data.amount);
      })
      .catch((error) => {
        console.log("error at", error);
      });
  };

  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Some error at razorpay screen loading");
      return;
    }

    const options = {
      key: "rzp_test_KZWfJv1KGDv6La",
      amount: amount,
      currency: "INR",
      name: "OrcadeHub",
      description: "payment to OrcadeHub",
      image:
        "https://www.orcadehub.com/static/media/log.a4a397196354c6736694.png",
      handler: function (response) {
        setResponseId(response.razorpay_payment_id);
      },
      prefill: {
        name: "papaya coders",
        email: "papayacoders@gmail.com",
      },
      theme: {
        color: "#6a0dad",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const paymentFetch = (e) => {
    e.preventDefault();

    const paymentId = e.target.paymentId.value;

    axios
      .get(`${baseURL}/payment/${paymentId}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data);
      })
      .catch((error) => {
        console.log("error occures", error);
      });
  };

  const { courseId } = useParams();
  const course = courseData[courseId];

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const handleHover = () => document.body.classList.add("card-hover-effect");
    const handleLeave = () =>
      document.body.classList.remove("card-hover-effect");

    document.querySelectorAll(".roadmap-card").forEach((card) => {
      card.addEventListener("mouseenter", handleHover);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.querySelectorAll(".roadmap-card").forEach((card) => {
        card.removeEventListener("mouseenter", handleHover);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const handleUPIPayment = () => {
    if (!course) return;

    const upiURL = `upi://pay?pa=${
      course.upiId
    }&pn=OrcadeHub&mc=&tid=&tr=&tn=Course%20Enrollment%20${
      course.title
    }&am=${course.price.replace("₹", "")}&cu=INR`;

    window.location.href = upiURL; // Redirect to UPI Payment
  };

  if (!course) {
    return (
      <Container className="mt-5 text-center">
        <h2>Course Not Found</h2>
        <p>The course you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {course.title}
      </motion.h2>

      <p className="text-center">{course.description}</p>

      {/* Course Details */}
      <h4>Course Information</h4>
      <p>
        <strong>📅 Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>💰 Price:</strong> {course.price}
      </p>
      <p>
        <strong>🚀 Next Batch Starts:</strong> {course.batchStart}
      </p>

      {/* Skills Covered */}
      <h4>Skills Covered</h4>
      <ul className="course-list">
        {course.skills.map((skill, index) => (
          <li key={index} className="course-list-item">
            {skill}
          </li>
        ))}
      </ul>

      {/* Roadmap */}
      <h4>Course Roadmap</h4>
      <Row>
        {course.roadmap.map((phase, index) => (
          <Col md={6} key={index}>
            <Card className="roadmap-card shadow-sm mb-3">
              <Card.Body>
                <h5>{phase.month}</h5>
                <p>{phase.details}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Benefits */}
      <h4>Course Benefits</h4>
      <ul className="course-list">
        {course.benefits.map((benefit, index) => (
          <li key={index} className="course-list-item">
            {benefit}
          </li>
        ))}
      </ul>

      {/* Enroll Button */}
      <div className="text-center mt-4">
        <Button onClick={handleShow} className="enroll-button">
          Enroll Now
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enroll in {course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>📅 Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>💰 Price:</strong> {course.price}
        </p>
        <p>
          <strong>🚀 Next Batch Starts:</strong> {course.batchStart}
        </p>
        <p>
          🔹 Secure your seat now and begin your learning journey with
          <strong> OrcadeHub!</strong>
        </p>

        {course.price === "₹5,999" ? (
  <Form.Group>
    <Form.Label>Select Installment Type</Form.Label>
    <Form.Control
      as="select"
      value={installmentType}
      onChange={(e) => setInstallmentType(e.target.value)}
    >
      <option value="full">Full Payment - ₹6000 at once</option>
      <option value="two">2 Installments - ₹3000/month for 2 months</option>
      <option value="three">3 Installments - ₹2000/month for 3 months</option>
    </Form.Control>
  </Form.Group>
) : (
  <p>Course Fee: {course.price}</p>
)}

      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="enroll-button" onClick={handleEnrollClick}>
          Proceed to Enroll
        </Button>
      </Modal.Footer>
    </Modal>
    </Container>
  );
};

export default CourseDetails;
