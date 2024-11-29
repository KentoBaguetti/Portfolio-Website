import React, { useState, useEffect } from "react";

const HighlightCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setCursorPosition({ x: event.clientX, y: event.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="highlight-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    />
  );
};

export default HighlightCursor;
