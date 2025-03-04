import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CustomCursor from "./components/CustomCursor";
import { ToastContainer } from "react-toastify";
import Internships from "./pages/Internships";
import AddInternship from "./components/AddInternship";
import Certi from "./pages/Certi";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Certificate from "./pages/Certificate";
import Payment from "./pages/Payment";
import LmsHeader from "./components/LMS/LmsHeader";
import LmsHome from "./pages/LMS/LmsHome";
import LmsAuth from "./components/LMS/LmsAuth";
import LmsDashBoard from "./pages/LMS/LmsDashBoard";

function Layout() {
  const location = useLocation();
  const isLmsRoute = location.pathname.startsWith("/lms");

  return (
    <>
      <CustomCursor />
      {isLmsRoute ? <LmsHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/add-internship" element={<AddInternship />} />
        <Route path="/verify/certificate" element={<Certi />} />
        <Route path="/download/certificate" element={<Certi />} />
        <Route path="/certificate/:certiid" element={<Certi />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="/error" element={<NotFound />} /> 

        {/* LMS Routes */}
        <Route path="/lms" element={<LmsHome />} />
        <Route path="/lms/login" element={<LmsAuth />} />
        <Route path="/lms/signup" element={<LmsAuth />} />
        <Route path="/lms/dashboard" element={<LmsDashBoard />} />
        <Route path="/lms/courses" element={<Courses />} />
        <Route path="/lms/courses/:courseId" element={<CourseDetails />} />
      </Routes>
      
      {!isLmsRoute && <Footer />} {/* Hide Footer in LMS */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
