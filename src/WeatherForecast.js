import React, { useState } from "react";
import WeatherPreview from "./WeatherPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <div className="five-hour-forecast">5-Hour Forecast</div>
        <div className="container">
          <div className="row">
            <WeatherPreview data={forecast.list[0]} />
            <WeatherPreview data={forecast.list[1]} />
            <WeatherPreview data={forecast.list[2]} />
            <WeatherPreview data={forecast.list[3]} />
            <WeatherPreview data={forecast.list[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eaba586c718e9928d025519220f8eb35";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
