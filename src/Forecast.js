import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let forecastRow = {
    time: "11:00",
    imgUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    imgDescr: "partly cloudy",
    temp: 20,
  };
  return (
    <div className="row Forecast">
      <div className="col-auto">
        <ul>
          <li className="forecast time">{forecastRow.time}</li>
          <li>
            <img
              src={forecastRow.imgUrl}
              alt={forecastRow.imgDescr}
              className="forecast-emoji"
            />
          </li>
          <li className="forecast temp">{forecastRow.temp}</li>
        </ul>
      </div>
    </div>
  );
}
