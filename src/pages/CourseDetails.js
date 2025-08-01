import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./CourseDetails.css";
import axios from "axios";
import config from "../config";
import courseData from "./courseData";

const CourseDetails = () => {
  const getBatchStartDate = () => {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth(); // 0-based index (Jan = 0, Dec = 11)
    let day = today.getDate();

    // If today is past the 20th, move to the next month
    if (day > 20) {
      month += 1;
      if (month > 11) {
        // If December, move to January of the next year
        month = 0;
        year += 1;
      }
    }

    const monthName = new Date(year, month).toLocaleString("default", {
      month: "long",
    });

    return `20th ${monthName}, ${year}`;
  };

  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;

  const [installmentType, setInstallmentType] = useState("full");

  const handleEnrollClick = async () => {
    const totalAmount = course.price;
    console.log(course.price);
    const courseName = course.title;

    try {
      const response = await axios.get(`${baseURL}/pay/${totalAmount * 100}`);

      if (response.data.checkoutPageUrl) {
        const orderDetails = {
          course: courseName,
          installmentType,
          amount: totalAmount,
          orderId: response.data.merchantOrderId,
          date: new Date().toISOString(),
        };
        localStorage.setItem("latestOrder", JSON.stringify(orderDetails));
        window.location.href = response.data.checkoutPageUrl;
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Payment API Error:", error);
      alert("Payment initiation failed.");
    }
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
        <strong>💰 Price:</strong> ₹{course.price}
      </p>
      <p>
        <strong>🚀 Next Batch Starts:</strong> {getBatchStartDate()}
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
      <div className="roadmap-container">
        {course.roadmap.map((phase, index) => (
          <div className="roadmap-card" key={index}>
            <h5>{phase.month}</h5>
            <p>{phase.details}</p>
          </div>
        ))}
      </div>

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
      <div className="text-center my-4">
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
            <strong>💰 Price:</strong> ₹{course.price}
          </p>
          <p>
            <strong>🚀 Next Batch Starts:</strong> {getBatchStartDate()}
          </p>
          <p>
            🔹 Secure your seat now and begin your learning journey with
            <strong> OrcadeHub!</strong>
          </p>

          <p>Course Fee: ₹{course.price}</p>
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
