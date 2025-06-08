import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Courses.css"; // Custom styling
import Mern from "../assets/mern.jpg";
import Py from "../assets/python.jpg";
// import Dsa from "../assets/dsa.jpg";
import Ui from "../assets/uiux.jpg";
import Sap from "../assets/sap.jpg";
import Pydsa from "../assets/pydsa.png";
import Cdsa from "../assets/cdsa.png";
import Cppdsa from "../assets/cppdsa.png";
import MobileApp from "../assets/mobapp.png";
import Javadsa from "../assets/javadsa.png";
import Rn from "../assets/rn.png";

const getBatchStartDate = () => {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth(); // Current month (0-based index)
  let day = today.getDate();

  // If today is past the 20th, move to next month
  if (day > 20) {
    month += 1;
    if (month > 11) {
      // If December, move to January next year
      month = 0;
      year += 1;
    }
  }

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  return `20th ${monthName}, ${year}`;
};

const courses = [
  {
    id: "mern-stack-30days",
    title: "MERN Stack Development",
    image: Mern,
    description: "Master MongoDB, Express.js, React, and Node.js from scratch.",
    duration: "30 Days",
    price: "₹299",
    batchStart: getBatchStartDate(),
  },
  {
    id: "python-django-30days",
    title: "Python & Django",
    image: Py,
    description:
      "Build dynamic web applications using Python and Django framework.",
    duration: "30 Days",
    price: "₹299",
    batchStart: getBatchStartDate(),
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    image: Mern,
    description: "Master MongoDB, Express.js, React, and Node.js from scratch.",
    duration: "6 Months",
    price: "₹5,999",
    batchStart: getBatchStartDate(),
  },
  // {
  //   id: "react-native",
  //   title: "React Native Development",
  //   image: Rn,
  //   description:
  //     "Learn to build cross-platform mobile apps using React Native.",
  //   duration: "6 Months",
  //   price: "₹5,999",
  //   batchStart: getBatchStartDate(),
  // },
  // {
  //   id: "sap-r2r",
  //   title: "SAP R2R Training",
  //   image: Sap,
  //   description:
  //     "Gain expertise in SAP Record to Report (R2R) with real-world projects.",
  //   duration: "45 Days",
  //   price: "₹1,499",
  //   batchStart: getBatchStartDate(),
  // },
  {
    id: "python-django",
    title: "Python & Django",
    image: Py,
    description:
      "Build dynamic web applications using Python and Django framework.",
    duration: "6 Months",
    price: "₹5,999",
    batchStart: getBatchStartDate(),
  },
  {
    id: "python-dsa",
    title: "Python Programming with DSA",
    image: Pydsa,
    description:
      "Learn Data Structures and Algorithms with Python for coding interviews.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: getBatchStartDate(),
  },
  {
    id: "java-dsa",
    title: "Java with DSA",
    image: Javadsa,
    description: "Master Java programming and problem-solving techniques.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: getBatchStartDate(),
  },
  // {
  //   id: "c-dsa",
  //   title: "C with DSA",
  //   image: Cdsa,
  //   description: "Strengthen your fundamentals with C and Data Structures.",
  //   duration: "45 Days",
  //   price: "₹1,499",
  //   batchStart: getBatchStartDate(),
  // },
  // {
  //   id: "cpp-dsa",
  //   title: "C++ with DSA",
  //   image: Cppdsa,
  //   description: "Learn competitive coding and advanced algorithms with C++.",
  //   duration: "45 Days",
  //   price: "₹1,499",
  //   batchStart: getBatchStartDate(),
  // },
  // {
  //   id: "uiux",
  //   title: "UI/UX Design",
  //   image: Ui,
  //   description:
  //     "Learn modern UI/UX principles and build user-friendly interfaces.",
  //   duration: "45 Days",
  //   price: "₹2,999",
  //   batchStart: getBatchStartDate(),
  // },
  // {
  //   id: "flutter",
  //   title: "Flutter Mobile App Development",
  //   image: MobileApp,
  //   description: "Build mobile applications for Android & iOS using Flutter.",
  //   duration: "45 Days",
  //   price: "₹2,999",
  //   batchStart: getBatchStartDate(),
  // },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="mt-5">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore Our Courses
        </motion.h2>

        <Row>
          {courses.map((course, index) => (
            <Col md={6} lg={4} key={course.id} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="floating-animation"
              >
                <Card
                  className="course-card shadow"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                    className="course-img"
                  />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <p>
                      <strong>📅 Duration:</strong> {course.duration}
                    </p>
                    <p>
                      <strong>💰 Price:</strong> {course.price}
                    </p>
                    <p>
                      <strong>🚀 Next Batch Starts:</strong> {course.batchStart}
                    </p>
                    <button class="btn btn-primary px-4 py-2 rounded shadow-sm">
  View More Details
</button>

                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Courses;
