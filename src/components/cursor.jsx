import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "rgb(255, 0, 0)",
        boxShadow: " 0 0 15px rgb(255, 0, 221), 0 0 30px rgb(255, 196, 0)",

        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default Cursor;
