import React from "react";

const MyCourses = ({ user }) => {
  return (
    <div className="courses-container">
      <h2>My Courses</h2>
      {user.courses.length > 0 ? (
        user.courses.map((course) => <p key={course.id}>{course.title}</p>)
      ) : (
        <p>You are not enrolled in any courses.</p>
      )}
    </div>
  );
};

export default MyCourses;
