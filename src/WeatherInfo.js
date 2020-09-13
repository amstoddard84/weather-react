import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="subheader">
        <small>
          <FormatDate 
          date={props.data.date} 
          time={props.data.time} />
          </small>
     <div className="subheader"
     id="description">
     {props.data.description}
         </div>
       <WeatherIcon code={props.data.icon}
        className="icon"/>
      </div>
      <h2>
        <WeatherTemp fahrenheit={props.data.temperature}
        className="temp-units"
        />
          <a href="/" className="far-temp">
            °F
          </a>
          <span className="pipe">|</span>
          <span className="temp-units">
            <a href="/" className="cels-temp">
              °C
            </a>
          </span>
      </h2>
      <ul className="details">
        <li>{props.data.precipitation}% precipitation</li>
        <li>{props.data.humidity}% humidity</li>
        <li>
          {props.data.wind}
          mph wind
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
}
