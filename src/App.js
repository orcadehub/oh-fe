import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CustomCursor from "./components/CustomCursor";
import Internships from "./pages/Internships";
import AddInternship from "./components/AddInternship";
import Certi from "./pages/Certi";
import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
import Certificate from "./pages/Certificate";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
     <CustomCursor />
      <Header />
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
        {/* <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
