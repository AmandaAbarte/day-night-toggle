import React from "react";
import "./toggle.css";
import Outer from "./outer";

export default function Toggle({ darkmode, toggleFunction, light, dark }) {
  const color = darkmode ? dark : light;
  return (
    <div className="toggle-container" onClick={toggleFunction}>
      <Outer color={color} />
    </div>
  );
}
