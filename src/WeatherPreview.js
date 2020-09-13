import React from "react";
import WeatherIcon from "./WeatherIcon";

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
      <WeatherIcon code={props.data.weather[0].icon} className="icon" />
      <span className="temp">{temperature()}</span>
    </div>
  );
}
