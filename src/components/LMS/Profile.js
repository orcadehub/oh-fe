import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
import { FaEdit } from "react-icons/fa";

const Profile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ fullName: user.fullName, email: user.email, phone: user.phone });
  const [profilePicFile, setProfilePicFile] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicFile(e.target.files[0]);
  };

  const handleEditProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const baseURL = process.env.NODE_ENV === "development" ? config.LOCAL_BASE_URL : config.BASE_URL;
      const formData = new FormData();
      formData.append("fullName", updatedUser.fullName);
      formData.append("email", updatedUser.email);
      formData.append("phone", updatedUser.phone);
      if (profilePicFile) formData.append("profilePic", profilePicFile);

      const response = await axios.put(`${baseURL}/update-profile`, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });

      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {user.fullName} 👋</h2>
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      {!isEditing ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            <FaEdit /> Edit Profile
          </button>
        </>
      ) : (
        <div className="edit-form">
          <input type="text" value={updatedUser.fullName} onChange={(e) => setUpdatedUser({ ...updatedUser, fullName: e.target.value })} />
          <input type="email" value={updatedUser.email} onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })} />
          <input type="text" value={updatedUser.phone} onChange={(e) => setUpdatedUser({ ...updatedUser, phone: e.target.value })} />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button className="save-btn" onClick={handleEditProfile}>Save</button>
          <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
