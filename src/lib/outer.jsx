import React from "react";

export default function Outer({ color }) {
  const fill = color ? color : "white";
  return (
    <svg
      width="62"
      height="28"
      viewBox="0 0 62 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 27V27.5H1H13.7307L13.791 26.5036C9.9974 26.043 7.14006 25.1635 5.18927 23.3222C3.25457 21.4961 2.12542 18.6389 1.98983 14.0147C2.11486 9.12577 3.37314 6.21466 5.42649 4.42559C7.50223 2.61701 10.4852 1.8672 14.2649 1.52922L14.2203 0.531204H1H0.5V1.0312V14.0156V27Z"
        fill={fill}
        stroke={fill}
      />
      <path d="M1 27L61 27" stroke={fill} stroke-width="2" />
      <path d="M1 1L61 1" stroke={fill} stroke-width="2" />
      <path
        d="M61.5 1.03121V0.531214H61H48.2693L48.209 1.52757C52.0026 1.98819 54.8599 2.8677 56.8107 4.709C58.7454 6.53512 59.8746 9.39229 60.0102 14.0165C59.8851 18.9054 58.6269 21.8165 56.5735 23.6056C54.4978 25.4142 51.5148 26.164 47.7351 26.502L47.7797 27.5H61H61.5V27V14.0156V1.03121Z"
        fill={fill}
        stroke={fill}
      />
    </svg>
  );
}
