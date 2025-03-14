import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = { x: e.clientX, y: e.clientY };
      setPosition(newPoint);
      setTrail((prev) => [...prev.slice(-10), newPoint]); // Keep last 10 positions
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((t, i) => (
        <motion.div
          key={i}
          className="cursor-trail"
          style={{
            left: t.x - 10,
            top: t.y - 10,
            opacity: (i + 1) / trail.length, // Fade effect
            transform: `scale(${1 - i * 0.08})`,
          }}
        />
      ))}

      {/* Cursor Core */}
      <motion.div
        className="cursor-core"
        animate={{ x: position.x - 4, y: position.y - 14 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
