import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { motion } from "framer-motion";
import { FaUser, FaBook, FaCertificate, FaSignOutAlt } from "react-icons/fa";
import "./LmsDashBoard.css"; // External CSS for styling

const LmsDashBoard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile"); // Default active tab

  useEffect(() => {
    const baseURL =
      process.env.NODE_ENV === "development"
        ? config.LOCAL_BASE_URL
        : config.BASE_URL;

    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(`${baseURL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/lms/login"; // Redirect to login
  };

  return (
    <div className="dashboard-container">
      {/* ✅ Sidebar Menu */}
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
            className={activeTab === "certificates" ? "active" : ""}
            onClick={() => setActiveTab("certificates")}
          >
            <FaCertificate /> Certificates
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </motion.div>

      {/* ✅ Right Side Content */}
      <div className="content">
        {activeTab === "profile" && user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Welcome, {user.name} 👋</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </motion.div>
        ) : activeTab === "courses" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>📚 My Courses</h2>
            <p>List of enrolled courses will be shown here...</p>
          </motion.div>
        ) : activeTab === "certificates" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>📜 Certificates</h2>
            <p>Your earned certificates will be displayed here...</p>
          </motion.div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default LmsDashBoard;
