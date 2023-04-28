import React, { useState } from "react";
import "./app.css";

import Toggle from "../lib/toggle";
export default function App() {
  const [darkmode, setDarkmdode] = useState(false);
  function toggleDarkmode() {
    setDarkmdode(!darkmode);
  }
  return (
    <div
      style={{ backgroundColor: darkmode ? "black" : "white", height: "100vh" }}
      className="example-div"
    >
      <Toggle
        darkmode={darkmode}
        toggleFunction={toggleDarkmode}
      />
    </div>
  );
}
