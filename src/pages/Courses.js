import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Courses.css"; // Custom styling
import Mern from '../assets/mern.jpg';
import Py from '../assets/python.jpg';
import Dsa from '../assets/dsa.jpg';
import Ui from '../assets/uiux.jpg';
import Sap from '../assets/sap.jpg';
import Pydsa from '../assets/pydsa.png';
import Cdsa from '../assets/cdsa.png';
import Cppdsa from '../assets/cppdsa.png';
import MobileApp from '../assets/mobapp.png';
import Javadsa from '../assets/javadsa.png';
import Rn from '../assets/rn.png';

const courses = [
  // 6-Month Programs
  { id: "mern-stack", title: "MERN Stack Development", image: Mern, description: "Master MongoDB, Express.js, React, and Node.js from scratch.", duration: "6 Months", price: "₹5,999", batchStart: "April 10, 2024" },
  { id: "react-native", title: "React Native - Mobile App Development", image: Rn, description: "Learn to build cross-platform mobile apps using React Native.", duration: "6 Months", price: "₹5,999", batchStart: "April 15, 2024" },
  { id: "sap-r2r", title: "SAP R2R Training", image: Sap, description: "Gain expertise in SAP Record to Report (R2R) with real-world projects.", duration: "45 Days", price: "₹1,499", batchStart: "April 20, 2024" },
  { id: "python-django", title: "Python & Django", image: Py, description: "Build dynamic web applications using Python and Django framework.", duration: "6 Months", price: "₹5,999", batchStart: "April 12, 2024" },

  // 45-Day Programs
  { id: "python-dsa", title: "Python Programming with DSA", image: Pydsa, description: "Learn Data Structures and Algorithms with Python for coding interviews.", duration: "45 Days", price: "₹1,499", batchStart: "April 5, 2024" },
  { id: "java-dsa", title: "Java with DSA", image: Javadsa, description: "Master Java programming and problem-solving techniques.", duration: "45 Days", price: "₹1,499", batchStart: "April 8, 2024" },
  { id: "c-dsa", title: "C with DSA", image: Cdsa, description: "Strengthen your fundamentals with C and Data Structures.", duration: "45 Days", price: "₹1,499", batchStart: "April 7, 2024" },
  { id: "cpp-dsa", title: "C++ with DSA", image: Cppdsa, description: "Learn competitive coding and advanced algorithms with C++.", duration: "45 Days", price: "₹1,499", batchStart: "April 9, 2024" },
  { id: "uiux", title: "UI/UX Design", image: Ui, description: "Learn modern UI/UX principles and build user-friendly interfaces.", duration: "45 Days", price: "₹2,999", batchStart: "April 6, 2024" },
  { id: "flutter", title: "Flutter Mobile App Development", image: MobileApp, description: "Build mobile applications for Android & iOS using Flutter.", duration: "45 Days", price: "₹2,999", batchStart: "April 10, 2024" }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Explore Our Courses</h2>
      <Row>
        {courses.map((course) => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="course-card shadow" onClick={() => navigate(`/courses/${course.id}`)}>
                <Card.Img variant="top" src={course.image} alt={course.title} className="course-img" />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <p><strong>📅 Duration:</strong> {course.duration}</p>
                  <p><strong>💰 Price:</strong> {course.price}</p>
                  <p><strong>🚀 Next Batch Starts:</strong> {course.batchStart}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
