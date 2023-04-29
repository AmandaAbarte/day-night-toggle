import React from "react";
import "./toggle.css";
import sky from "./sky.svg";

export default function Toggle({ darkmode, toggleFunction, light, dark }) {
  const darkcolor = dark ? dark : "black";
  const lightcolor = light ? light : "white";
  const color = darkmode ? darkcolor : lightcolor;
  const position = darkmode ? "0" : "100%";
  return (
    <div
      className="toggle-container"
      onClick={toggleFunction}
      style={{
        backgroundImage: "url(" + sky + ")",
        backgroundPositionX: position,
      }}
    ></div>
  );
}
