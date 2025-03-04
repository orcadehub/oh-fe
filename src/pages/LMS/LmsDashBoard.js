import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

const LmsDashBoard = () => {
  const [user, setUser] = useState(null);

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
            Authorization: `Bearer ${token}`, // Fix: Added 'Bearer ' before the token
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name} 👋</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default LmsDashBoard;
