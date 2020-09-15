import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherPreview.css";

export default function WeatherPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    return `${hours}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°F`;
  }

  return (
    <div className="WeatherPreview">
      <h4 className="forecast-time">{hours()}</h4>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <span className="temp">{temperature()}</span>
    </div>
  );
}
