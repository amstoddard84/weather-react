import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherPreview.css";

export default function WeatherPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherPreview">
      <h4 className="forecast-time">{hours()}</h4>
      <WeatherIcon className="icon" code={props.data.weather[0].icon} />
      <span className="temp">{temperature()}</span>
    </div>
  );
}
