import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./CourseDetails.css"; // Add styles if needed

const courseData = {
  "mern-stack": {
    title: "MERN Stack Development",
    description: "Master MongoDB, Express.js, React, and Node.js with hands-on projects and real-world applications.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git & GitHub", "Deployment"],
    roadmap: [
      { month: "Month 1", details: "HTML, CSS, Bootstrap, Python Programming. Build static & responsive websites." },
      { month: "Month 2", details: "JavaScript, React.js, Redux, Git. Develop interactive React applications." },
      { month: "Month 3", details: "Express.js, Django, Node.js, MongoDB. API development & backend integration." },
      { month: "Month 4", details: "Full-Stack Integration, Deployment. Build & launch a live project." },
      { month: "Month 5-6", details: "Guaranteed Internship - Work on real client projects at OrcadeHub." }
    ],
    benefits: [
      "Hands-on project experience",
      "Certificate of completion",
      "Resume building sessions",
      "Placement assistance",
      "Cash prizes & surprise gifts for top performers",
      "Flexible payment options"
    ],
    documentLink: "https://forms.gle/jafd2gGjzG2axun89"
  },
  "python-django": {
    title: "Python & Django Full Stack",
    description: "Learn Python and Django for full-stack development, including databases, API integration, and deployment.",
    skills: ["Python", "Django", "SQL", "JavaScript", "React.js", "Git & GitHub", "Cloud Deployment"],
    roadmap: [
      { month: "Month 1", details: "Python basics, Django fundamentals, HTML, CSS, Bootstrap." },
      { month: "Month 2", details: "Django models, SQL databases, API creation, React.js." },
      { month: "Month 3", details: "Full-stack integration, authentication, project structuring." },
      { month: "Month 4", details: "Deployment, CI/CD, cloud hosting on Heroku/AWS." },
      { month: "Month 5-6", details: "Guaranteed Internship - Work on live industry projects." }
    ],
    benefits: [
      "Real-time Django projects",
      "Internship & placement support",
      "Portfolio-building assistance",
      "Industry-relevant projects",
      "Flexible payment options"
    ],
    documentLink: "https://forms.gle/jafd2gGjzG2axun89"
  }
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

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

      {/* Skills Covered */}
      <h4>Skills Covered</h4>
      <ul>
        {course.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
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
      <ul>
        {course.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {/* Enrollment & Document Link */}
      <div className="text-center mt-4">
        <Button href={course.documentLink} target="_blank" variant="primary">
          Download Course Document
        </Button>
      </div>
    </Container>
  );
};

export default CourseDetails;
