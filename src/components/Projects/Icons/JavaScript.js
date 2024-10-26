import React from "react";

const JavaScript = ({ width = 24, height = 24, color = "#333" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <rect width="16.5" height="16.5" x="3.75" y="3.75" rx="3" />
      <path d="M11.5 11.25v4.5a1.5 1.5 0 0 1-1.5 1.5H9m8.25-6h-1.5a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5v0a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-1.5" />
    </g>
  </svg>
);

export default JavaScript;
