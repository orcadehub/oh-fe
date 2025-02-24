import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css"; // Add styles

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{ x: position.x - 10, y: position.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      {/* Cursor Tail */}
      <motion.div
        className="cursor-tail"
        animate={{ x: position.x - 10, y: position.y - 10 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
