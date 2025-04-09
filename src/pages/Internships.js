import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import Qr from '../assets/qr.jpeg'
import { motion } from "framer-motion";
import "./Internships.css";
import Logo from "../assets/log.png";

const Internships = () => {
  const internships = [
    {
      _id: "1",
      title: "Full Stack Development Internship",
      role: "Full Stack Developer",
      company: "OrcadeHub",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "3",
      title: "UI/UX Design Internship",
      role: "UI/UX Designer",
      company: "OrcadeHub",
      skills: [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "4",
      title: "Frontend Development Internship",
      role: "Frontend Developer",
      company: "OrcadeHub",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Redux"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "5",
      title: "Backend Development Internship",
      role: "Backend Developer",
      company: "OrcadeHub",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "6",
      title: "Database Management Internship",
      role: "Database Manager",
      company: "OrcadeHub",
      skills: ["MongoDB", "Mongoose", "NoSQL", "Database Optimization"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "7",
      title: "MERN Stack Development Internship",
      role: "MERN Stack Developer",
      company: "OrcadeHub",
      skills: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Full Stack Development",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "8",
      title: "React Native Development Internship",
      role: "React Native Developer",
      company: "OrcadeHub",
      skills: ["React Native", "Expo", "Android/iOS Development", "Redux"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "9",
      title: "Machine Learning Internship",
      role: "Machine Learning Engineer",
      company: "OrcadeHub",
      skills: ["Python", "Pandas", "Scikit-learn", "NumPy", "Model Evaluation"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "10",
      title: "Deep Learning Internship",
      role: "Deep Learning Engineer",
      company: "OrcadeHub",
      skills: ["TensorFlow", "Keras", "CNN", "RNN", "Computer Vision"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "11",
      title: "Artificial Intelligence Internship",
      role: "AI Developer",
      company: "OrcadeHub",
      skills: ["Python", "AI Concepts", "Chatbots", "Neural Networks"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "12",
      title: "Cyber Security Internship",
      role: "Cyber Security Analyst",
      company: "OrcadeHub",
      skills: [
        "Ethical Hacking",
        "Network Security",
        "OWASP",
        "Tools like Wireshark",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "13",
      title: "Software Testing Internship",
      role: "QA Tester",
      company: "OrcadeHub",
      skills: ["Manual Testing", "Automation", "Selenium", "Bug Tracking"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "14",
      title: "DevOps Internship",
      role: "DevOps Engineer",
      company: "OrcadeHub",
      skills: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Git"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "15",
      title: "Cloud Computing Internship",
      role: "Cloud Engineer",
      company: "OrcadeHub",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Deployments",
        "Virtual Machines",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "16",
      title: "Data Science Internship",
      role: "Data Scientist",
      company: "OrcadeHub",
      skills: ["Data Analysis", "Visualization", "Python", "Machine Learning"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "17",
      title: "Blockchain Internship",
      role: "Blockchain Developer",
      company: "OrcadeHub",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "18",
      title: "Android Development Internship",
      role: "Android Developer",
      company: "OrcadeHub",
      skills: ["Java", "Kotlin", "Android Studio", "Jetpack"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "19",
      title: "iOS Development Internship",
      role: "iOS Developer",
      company: "OrcadeHub",
      skills: ["Swift", "Xcode", "UI Kit", "iOS SDK"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "20",
      title: "Flutter Development Internship",
      role: "Flutter Developer",
      company: "OrcadeHub",
      skills: ["Flutter", "Dart", "Cross Platform Apps"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "21",
      title: "Python Development Internship",
      role: "Python Developer",
      company: "OrcadeHub",
      skills: ["Python", "OOPs", "File Handling", "Libraries"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "22",
      title: "Java Development Internship",
      role: "Java Developer",
      company: "OrcadeHub",
      skills: ["Java", "Spring Boot", "JDBC", "OOP"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "23",
      title: "C/C++ Programming Internship",
      role: "C/C++ Programmer",
      company: "OrcadeHub",
      skills: ["C", "C++", "Pointers", "Data Structures"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "24",
      title: "Digital Marketing Internship",
      role: "Digital Marketer",
      company: "OrcadeHub",
      skills: ["SEO", "SEM", "Google Ads", "Social Media Marketing"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "25",
      title: "Content Writing Internship",
      role: "Content Writer",
      company: "OrcadeHub",
      skills: ["Creative Writing", "SEO Writing", "Blogging", "Proofreading"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "26",
      title: "Business Analysis Internship",
      role: "Business Analyst",
      company: "OrcadeHub",
      skills: [
        "Requirement Gathering",
        "Wireframes",
        "BRD/FRD",
        "Tools like JIRA",
      ],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "27",
      title: "Product Management Internship",
      role: "Product Manager Intern",
      company: "OrcadeHub",
      skills: ["Product Roadmap", "Strategy", "Market Research", "Agile"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
    {
      _id: "28",
      title: "Data Analytics Internship",
      role: "Data Analyst",
      company: "OrcadeHub",
      skills: ["Excel", "SQL", "Power BI", "Visualization", "Python"],
      price: "₹49 for Offer Letter, Certificate, LOR & Maintenance",
    },
  ];

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleDurationChange = (internship, duration) => {
    setSelectedInternship(internship);
    setSelectedDuration(duration);
    setShowModal(true);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🔥 Available Virtual Internships</h2>

      <Row className="justify-content-center">
        {internships.map((internship) => (
          <Col lg={4} md={6} sm={12} key={internship._id} className="mb-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Card className="internship-card shadow p-3">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <div className="company-logo">
                    <img
                      src={Logo}
                      alt={internship.company}
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="internship-details mt-3">
                    <Card.Title className="fw-bold">
                      {internship.role}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {internship.company}
                    </Card.Subtitle>
                    <p className="fw-bold text-danger">{internship.price}</p>
                    <p className="skills">
                      <strong>Skills:</strong> {internship.skills.join(", ")}
                    </p>
                    <Form.Select
                      onChange={(e) =>
                        handleDurationChange(internship, e.target.value)
                      }
                      className="mb-2"
                    >
                      <option value="">Select Duration</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      {/* <option value="3 Months">3 Months</option>
                      <option value="4 Months">4 Months</option>
                      <option value="6 Months">6 Months</option> */}
                    </Form.Select>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            To enroll in the <strong>{selectedInternship?.title}</strong> for{" "}
            {selectedDuration}, please send
            <strong> ₹49 </strong> to <strong>+91 7093012101</strong> via any
            UPI.
          </p>
          <div className="text-center my-3">
            <img
              src={Qr} // Update this path to your actual QR code image location
              alt="UPI QR Code"
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
            <p className="mt-2">
              <strong>Scan & Pay</strong>
            </p>
          </div>
          <p>
            After payment, send the screenshot via WhatsApp to proceed with the
            next step.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Internships;
