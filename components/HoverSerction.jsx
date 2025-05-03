import React, { useRef, useEffect, useState } from "react";
import "./HoverSection.css";

const HoverSection = () => {
  const cursorRef = useRef(null);
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    const parent = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - parent.left;
    const y = e.clientY - parent.top;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    }
  };

  return (
    <div
      className="hover-container"
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: isInside ? "none" : "default" }}
    >
      {isInside && (
        <div className="custom-cursor-button" ref={cursorRef}>
          SCROLL DOWN <span className="arrow">↓</span>
        </div>
      )}
    </div>
  );
};

export default HoverSection;
