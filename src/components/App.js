import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div id="main">
      <Tooltip text="This is a tooltip">
        <h2 style={{ textDecoration: "underline", cursor: "pointer" }}>
          Hover over me
        </h2>
      </Tooltip>

      <br/>

      <Tooltip text="Another tooltip here!">
        <p style={{ cursor: "pointer" }}>
          Hover over me to see another tooltip
        </p>
      </Tooltip>
    </div>
  );
}