import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaComment } from "react-icons/fa";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "OrcadeHub",
      content: "🚀 Exciting News! Our next Full Stack Web Development batch starts soon. Enroll now!",
      likes: 12,
      comments: [],
    },
    {
      id: 2,
      user: "Gurram Sathish",
      content: "Completed my internship at OrcadeHub! Learned a lot about MERN stack. Thanks to the mentors!",
      likes: 25,
      comments: ["Congratulations!", "Well done!"],
    },
  ]);

  return (
    <div className="container mt-4">
      {/* Create Post Section */}
      <div className="card p-3 mb-4">
        <input type="text" className="form-control" placeholder="What's on your mind?" />
        <button className="btn btn-primary mt-2 w-100">Post</button>
      </div>

      {/* Feed Posts */}
      {posts.map((post) => (
        <div key={post.id} className="card mb-3 p-3">
          <h5 className="fw-bold">{post.user}</h5>
          <p>{post.content}</p>
          <div className="d-flex gap-3 mt-2">
            <button className="btn btn-outline-danger btn-sm">
              <FaHeart className="me-1" /> {post.likes}
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <FaComment className="me-1" /> {post.comments.length}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
