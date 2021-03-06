import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-7">
          <h1>New York</h1>
        </div>
        <div className="col-4 Data">
          <ul>
            <li>Updated at 10:00</li>
            <li>11 Septemper</li>
            <li>Friday</li>
          </ul>
        </div>
      </div>
      <p>Sunny</p>
      <div className="row">
        <div className="clearfix">
          <div className="col-auto float-left mt-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
          </div>
          <div className="col-auto float-left">
            <span className="degrees">18</span>
            <span className="units">
              <a href="/" className="active-link">
                °C
              </a>
              |<a href="/">°F</a>
            </span>
          </div>
        </div>

        <div className="col-5">
          <br />
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
