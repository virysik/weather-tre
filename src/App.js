import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
      <small>Enter a city:</small>
      <Search />
      <br />
      <Weather />
      <br />
      <Forecast />
      <Signature />
    </div>
  );
}

export default App;
