import React from "react";
import "./App.css";
import Enter from "./Enter";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Enter />
      <Search />
      <br />
      <Weather />
    </div>
  );
}

export default App;
