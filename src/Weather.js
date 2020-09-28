import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="row City">
        <div className="col-7 Name">
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
      <p className="Description">Sunny</p>;
      <div className="row">
        <div className="clearfix">
          <div className="col-auto float-left mt-3 Icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
          </div>
          <div className="col-auto float-left Temp">
            <span className="degrees">18</span>
            <span className="units">
              <a href="/" className="active-link">
                °C
              </a>
              |<a href="/">°F</a>
            </span>
          </div>
        </div>

        <div className="col-5 Atributes">
          <br />
          <ul>
            <li className="humidity">humidity: 80 %</li>
            <li className="humidity">wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
