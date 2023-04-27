import React from "react";
import "./toggle.css";
import Outer from "./outer";
import sky from "./sky.svg";

export default function Toggle({ darkmode, toggleFunction, light, dark }) {
  const color = darkmode ? dark : light;
  const position = darkmode ? "0" : "100%";
  return (
    <div
      className="toggle-container"
      onClick={toggleFunction}
      style={{
        backgroundImage: "url(" + sky + ")",
        backgroundPositionX: position,
      }}
    >
      <Outer color={color} />
    </div>
  );
}
