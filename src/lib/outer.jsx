import React from "react";

export default function Outer({ color }) {
  const fill = color ? color : "white";
  return (
    <svg
      width="63"
      height="28"
      viewBox="0 0 63 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8926 27H1V14V1H14.3884C6.68994 1.68059 1.74898 4.04217 1.49587 14C1.7709 23.414 6.15289 26.0709 13.8926 27Z"
        fill={fill}
        stroke={fill}
      />
      <path d="M13.3884 27H50.0826" stroke={fill} />
      <path d="M14.3802 1.00002H49.5868" stroke={fill} />
      <path
        d="M49.5785 1.00002H62.4711V14V27H49.0826C56.7811 26.3194 61.7221 23.9578 61.9752 14C61.7002 4.58603 57.3182 1.92909 49.5785 1.00002Z"
        fill={fill}
        stroke={fill}
      />
    </svg>
  );
}
