import React from "react";

const Certificates = ({ user }) => {
  return (
    <div className="certificates-container">
      <h2>My Certificates</h2>
      {user.certificates.length > 0 ? (
        user.certificates.map((cert) => <p key={cert.id}>{cert.title}</p>)
      ) : (
        <p>No certificates issued yet.</p>
      )}
    </div>
  );
};

export default Certificates;
