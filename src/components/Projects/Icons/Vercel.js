import React from "react";

const Vercel = ({ width = 24, height = 24, color = "#333" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m12 3.333l10 17.333H2z"
      clipRule="evenodd"
    />
  </svg>
);

export default Vercel;
