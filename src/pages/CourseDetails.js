import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./CourseDetails.css";
import axios from "axios";
import config from "../config";

const courseData = {
  // MERN Stack (6 Months)
  "mern-stack": {
    title: "MERN Stack Development",
    upiId: "7093012101@superyes",
    description:
      "Master MongoDB, Express.js, React, and Node.js with hands-on projects and real-world applications.",
    duration: "6 Months (4 Months Training + 2 Months Internship)",
    price: "₹5,999",
    batchStart: "April 10, 2024",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Git & GitHub",
      "Deployment",
    ],
    roadmap: [
      {
        month: "Month 1",
        details:
          "HTML, CSS, Bootstrap, Python Programming. Build static & responsive websites.",
      },
      {
        month: "Month 2",
        details:
          "JavaScript, React.js, Redux, Git. Develop interactive React applications.",
      },
      {
        month: "Month 3",
        details:
          "Express.js, Django, Node.js, MongoDB. API development & backend integration.",
      },
      {
        month: "Month 4",
        details:
          "Full-Stack Integration, Deployment. Build & launch a live project.",
      },
      {
        month: "Month 5-6",
        details:
          "Guaranteed Internship - Work on real client projects at OrcadeHub.",
      },
    ],
    benefits: [
      "Hands-on project experience",
      "Certificate of completion",
      "Placement assistance",
      "Flexible payment options",
    ],
  },

  // React Native - Mobile App Development (6 Months)
  "react-native": {
    title: "React Native - Mobile App Development",
    description:
      "Learn React Native to build cross-platform mobile apps for Android & iOS.",
    duration: "6 Months (4 Months Training + 2 Months Internship)",
    price: "₹5,999",
    batchStart: "April 15, 2024",
    skills: [
      "React Native",
      "Expo",
      "Redux",
      "Firebase",
      "API Integration",
      "Push Notifications",
    ],
    roadmap: [
      {
        month: "Month 1",
        details: "React Basics, JSX, Components, State & Props",
      },
      {
        month: "Month 2",
        details: "React Navigation, API Calls, Authentication",
      },
      {
        month: "Month 3",
        details: "Redux, Firebase Integration, Push Notifications",
      },
      {
        month: "Month 4",
        details: "Publishing Apps on Play Store & App Store",
      },
      {
        month: "Month 5-6",
        details: "Internship - Work on real-world mobile applications",
      },
    ],
    benefits: [
      "Hands-on mobile app development",
      "Internship & Placement Support",
      "Certificate of Completion",
    ],
  },

  // SAP R2R Training (45 Days)
  "sap-r2r": {
    title: "SAP R2R Training",
    description:
      "Master SAP Record to Report (R2R) process with real-world implementation techniques.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: "April 20, 2024",
    skills: ["SAP R2R", "Financial Reporting", "Business Process Management"],
    roadmap: [
      { month: "Week 1-2", details: "SAP Basics, Financial Accounting" },
      { month: "Week 3-4", details: "General Ledger, Asset Accounting" },
      { month: "Week 5-6", details: "SAP Implementation, Case Studies" },
    ],
    benefits: [
      "Industry certification",
      "Hands-on SAP training",
      "Placement assistance",
    ],
  },

  // Python & Django Full Stack (6 Months)
  "python-django": {
    title: "Python & Django Full Stack",
    description:
      "Learn Python and Django for full-stack development, including databases, API integration, and deployment.",
    duration: "6 Months (4 Months Training + 2 Months Internship)",
    price: "₹5,999",
    batchStart: "April 12, 2024",
    skills: [
      "Python",
      "Django",
      "SQL",
      "JavaScript",
      "React.js",
      "Git & GitHub",
      "Cloud Deployment",
    ],
    roadmap: [
      {
        month: "Month 1",
        details: "Python basics, Django fundamentals, HTML, CSS, Bootstrap.",
      },
      {
        month: "Month 2",
        details: "Django models, SQL databases, API creation, React.js.",
      },
      {
        month: "Month 3",
        details: "Full-stack integration, authentication, project structuring.",
      },
      {
        month: "Month 4",
        details: "Deployment, CI/CD, cloud hosting on Heroku/AWS.",
      },
      {
        month: "Month 5-6",
        details: "Internship - Work on live industry projects.",
      },
    ],
    benefits: [
      "Real-time Django projects",
      "Internship & placement support",
      "Industry-relevant projects",
    ],
  },

  // 45-Day Programs
  "python-dsa": {
    title: "Python Programming with DSA",
    description:
      "Learn Data Structures and Algorithms with Python for coding interviews.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: "April 5, 2024",
    skills: [
      "Python",
      "Data Structures",
      "Algorithms",
      "Competitive Programming",
    ],
    roadmap: [
      {
        month: "Week 1-2",
        details: "Python Basics, Arrays, Strings, Recursion",
      },
      { month: "Week 3-4", details: "Linked Lists, Stacks, Queues, Trees" },
      {
        month: "Week 5-6",
        details: "Graphs, Dynamic Programming, Problem Solving",
      },
    ],
    benefits: [
      "Certificate of Completion",
      "Placement Preparation",
      "Coding Challenges",
    ],
  },

  "java-dsa": {
    title: "Java with DSA",
    description: "Master Java programming and problem-solving techniques.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: "April 8, 2024",
    skills: ["Java", "Data Structures", "Algorithms", "Competitive Coding"],
    roadmap: [
      { month: "Week 1-2", details: "Java Basics, OOPs, Arrays, Strings" },
      { month: "Week 3-4", details: "Linked Lists, Stacks, Queues, Trees" },
      {
        month: "Week 5-6",
        details: "Graphs, Dynamic Programming, Advanced Algorithms",
      },
    ],
    benefits: [
      "Certificate of Completion",
      "Coding Challenges",
      "Placement Preparation",
    ],
  },

  "c-dsa": {
    title: "C with DSA",
    description: "Strengthen your fundamentals with C and Data Structures.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: "April 7, 2024",
    skills: ["C Programming", "Data Structures", "Algorithms"],
    roadmap: [
      { month: "Week 1-2", details: "C Basics, Arrays, Pointers, Strings" },
      { month: "Week 3-4", details: "Linked Lists, Stacks, Queues, Trees" },
      {
        month: "Week 5-6",
        details: "Graphs, Dynamic Programming, Advanced Topics",
      },
    ],
    benefits: [
      "Certificate of Completion",
      "Hands-on Problem Solving",
      "Placement Assistance",
    ],
  },

  "cpp-dsa": {
    title: "C++ with DSA",
    description: "Learn competitive coding and advanced algorithms with C++.",
    duration: "45 Days",
    price: "₹1,499",
    batchStart: "April 9, 2024",
    skills: ["C++", "STL", "Data Structures", "Algorithms"],
    roadmap: [
      { month: "Week 1-2", details: "C++ Basics, OOPs, STL, Arrays" },
      { month: "Week 3-4", details: "Linked Lists, Stacks, Queues, Trees" },
      { month: "Week 5-6", details: "Graphs, DP, Problem Solving Strategies" },
    ],
    benefits: [
      "Certificate of Completion",
      "Hands-on Coding Practice",
      "Placement Support",
    ],
  },

  uiux: {
    title: "UI/UX Design",
    description:
      "Learn modern UI/UX principles and build user-friendly interfaces.",
    duration: "45 Days",
    price: "₹2,999",
    batchStart: "April 6, 2024",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    roadmap: [
      { month: "Week 1-2", details: "User Research, Wireframing" },
      { month: "Week 3-4", details: "Prototyping, UI Components" },
      { month: "Week 5-6", details: "Usability Testing, Final Project" },
    ],
    benefits: [
      "Certificate of Completion",
      "Portfolio Development",
      "Industry Exposure",
    ],
  },

  flutter: {
    title: "Flutter Mobile App Development",
    description: "Build mobile applications for Android & iOS using Flutter.",
    duration: "45 Days",
    price: "₹2,999",
    batchStart: "April 10, 2024",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "State Management",
      "API Integration",
    ],
    roadmap: [
      {
        month: "Week 1-2",
        details: "Flutter Basics, Dart Programming, UI Design with Widgets",
      },
      {
        month: "Week 3-4",
        details:
          "State Management (Provider, Riverpod), API Integration, Firebase Authentication",
      },
      {
        month: "Week 5-6",
        details: "Building, Testing & Deploying Apps on Play Store & App Store",
      },
    ],
    benefits: [
      "Certificate of Completion",
      "Real-World App Development",
      "Industry Exposure",
    ],
  },
};


const CourseDetails = () => {

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

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
      .get( `${baseURL}/payment/${paymentId}`)
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

    const upiURL = `upi://pay?pa=${course.upiId}&pn=OrcadeHub&mc=&tid=&tr=&tn=Course%20Enrollment%20${course.title}&am=${course.price.replace("₹", "")}&cu=INR`;

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

      {/* Enroll Modal */}
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
            **OrcadeHub!**
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="enroll-button"
            onClick={() => createRazorpayOrder(100)}
          >
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CourseDetails;
