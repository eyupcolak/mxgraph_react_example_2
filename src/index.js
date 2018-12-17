import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Demo";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
