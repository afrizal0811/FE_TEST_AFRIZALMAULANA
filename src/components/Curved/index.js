import React from "react";
import "./index.css";
const Curved = () => {
  return (
    <div className="sec1">
      <div className="svg-container">
        <svg width="500px" height="200px" viewBox="24 -60 200 100">
          <path
            id="MyaPath"
            d="M 0 100
           A 100 100 0 0 1 200 100
           L 0 100
           Z"
            fill="none"
            // stroke="red"
          />
          <g transform="rotate(57, 100, 100)">
            <text fill="#626d5b" font-size="17" font-weight="bold">
              <textPath href="#MyaPath">The Wedding of</textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Curved;
