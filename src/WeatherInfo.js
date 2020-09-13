import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="subheader">
        <small>
          <FormatDate date={props.data.date} time={props.data.time} />
        </small>
        <div className="subheader" id="description">
          {props.data.description}
        </div>
        <WeatherIcon code={props.data.icon} className="icon" />
      </div>
      <h2>
        <div className="temp-units">
          <WeatherTemp fahrenheit={props.data.temperature} />
        </div>
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
  );
}
