import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Courses.css"; // Custom styling
import Mern from '../assets/mern.jpg'
import Py from '../assets/python.jpg'
import Dsa from '../assets/dsa.jpg'
import Ui from '../assets/uiux.jpg'
const courses = [
  { id: "mern-stack", title: "MERN Stack Development", image: Mern, description: "Master MongoDB, Express.js, React, and Node.js from scratch." },
  { id: "python-django", title: "Python & Django", image: Py, description: "Build dynamic web applications using Python and Django framework." },
  { id: "data-structures", title: "Data Structures & Algorithms", image: Dsa, description: "Enhance problem-solving skills with DSA and competitive coding." },
  { id: "ui-ux", title: "UI/UX Design", image: Ui, description: "Learn modern UI/UX design principles with hands-on projects." }
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
