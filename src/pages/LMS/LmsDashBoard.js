import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBook,
  FaCertificate,
  FaSignOutAlt,
  FaEdit,
  FaTasks,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./LmsDashBoard.css";

const LmsDashBoard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    profilePic: "",
  });
  const [profilePicFile, setProfilePicFile] = useState(null);
  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;

  useEffect(() => {

    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        // Fetch user profile
        const response = await axios.get(`${baseURL}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
        console.log(response.data)
        setUpdatedUser(response.data);
        const enrolledCourses = response.data.enrolledCourses || [];

        // Fetch course details
        const courseRequests = enrolledCourses.map((course) =>
          axios.get(`${baseURL}/course/${course.courseId}`)
        );

        const courseResponses = await Promise.all(courseRequests);
        setEnrolledCourses(courseResponses.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleFileChange = (e) => {
    setProfilePicFile(e.target.files[0]);
  };

  const handleEditProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // const baseURL =
      //   process.env.NODE_ENV === "development"
      //     ? config.LOCAL_BASE_URL
      //     : config.BASE_URL;

      const formData = new FormData();
      formData.append("fullName", updatedUser.fullName);
      formData.append("email", updatedUser.email);
      formData.append("phone", updatedUser.phone);
      if (profilePicFile) formData.append("profilePic", profilePicFile);

      await axios.put(`${baseURL}/update-profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/lms/login";
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <motion.div
        className="sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="sidebar-title">LMS Dashboard</h3>
        <ul className="menu">
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser /> Profile
          </li>
          <li
            className={activeTab === "courses" ? "active" : ""}
            onClick={() => setActiveTab("courses")}
          >
            <FaBook /> My Courses
          </li>
          <li
            className={activeTab === "assignments" ? "active" : ""}
            onClick={() => setActiveTab("assignments")}
          >
            <FaTasks /> Assignments
          </li>
          <li
            className={activeTab === "certificates" ? "active" : ""}
            onClick={() => setActiveTab("certificates")}
          >
            <FaCertificate /> Certificates
          </li>
          <li
            className={activeTab === "payments" ? "active" : ""}
            onClick={() => setActiveTab("payments")}
          >
            <FaMoneyBillWave /> Payments
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="content">
       {/* Profile Section */}
       {activeTab === "profile" && user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Welcome, {user.fullName} 👋</h2>
            <div className="profile-section">
              {user.profilePic ? (
                <img
                  src={`${user.profilePic}`}
                  alt="Profile"
                  className="profile-pic"
                />
              ) : (
                <div className="profile-initials">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {!isEditing ? (
              <>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  <FaEdit /> Edit Profile
                </button>
              </>
            ) : (
              <div className="edit-form">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={updatedUser.fullName}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, fullName: e.target.value })
                  }
                />
                <label>Email:</label>
                <input
                  type="email"
                  value={updatedUser.email}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, email: e.target.value })
                  }
                />
                <label>Phone:</label>
                <input
                  type="text"
                  value={updatedUser.phone}
                  onChange={(e) =>
                    setUpdatedUser({ ...updatedUser, phone: e.target.value })
                  }
                />
                <label>Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <button className="save-btn" onClick={handleEditProfile}>
                  Save
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Courses Section */}
        {activeTab === "courses" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>My Courses</h2>
            {loadingCourses ? (
              <p>Loading courses...</p>
            ) : enrolledCourses.length > 0 ? (
              enrolledCourses.map((course) => (
                <div key={course._id} className="course-card">
                  <h3>{course.title}</h3>
                  <p><strong>Description:</strong> {course.description}</p>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Price:</strong> ₹{course.price}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                </div>
              ))
            ) : (
              <p>No enrolled courses.</p>
            )}
          </motion.div>
        )}

        {/* Assignments Section */}
        {activeTab === "assignments" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>My Assignments</h2>
            <p>Assignments will be displayed here.</p>
          </motion.div>
        )}

        {/* Certificates Section */}
        {activeTab === "certificates" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>My Certificates</h2>
            <p>No certificates yet.</p>
          </motion.div>
        )}

        {/* Payments Section */}
        {activeTab === "payments" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>My Payments</h2>
            <p>No payment history available.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LmsDashBoard;
