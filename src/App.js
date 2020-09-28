import React from "react";
import "./App.css";
import Enter from "./Enter";
import Search from "./Search";
import City from "./City";
import Description from "./Description";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Signature from "./Signature";

function App() {
  return (
    <div className="App">
      
        <Enter />
        <Search />
        <br />
        <City />
        <Description />
        <Weather />
        <br />
        <Forecast />
        <Signature />
     
    </div>
  );
}

export default App;
