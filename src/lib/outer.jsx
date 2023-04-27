import React from "react";

export default function Outer({ color }) {
  const fill = color ? color : "white";
  return (
    <svg
      width="60"
      height="26"
      viewBox="0 0 60 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 0H0V13V26H13C5.8203 26 0 20.1797 0 13C0 5.82031 5.8203 0 13 0ZM47 0C54.1797 0 60 5.82031 60 13C60 20.1797 54.1797 26 47 26H60V13V0H47Z"
        fill={fill}
      />
    </svg>
  );
}
