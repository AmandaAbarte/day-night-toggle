import React, { useState } from "react";

import Toggle from "../lib/toggle";
export default function App() {
  const [darkmode, setDarkmdode] = useState(false);
  function toggleDarkmode() {
    setDarkmdode(!darkmode);
  }
  return (
    <Toggle
      darkmode={darkmode}
      toggleFunction={toggleDarkmode}
      light="white"
      dark="black"
    />
  );
}
