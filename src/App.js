import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CustomCursor from "./components/CustomCursor";
// import Internships from "./pages/Internships";
// import Jobs from "./pages/Jobs";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
     <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        {/* <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
