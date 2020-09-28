import React from "react";
import "./App.css";
import Enter from "./Enter";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
      <Enter />
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
