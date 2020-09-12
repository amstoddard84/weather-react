import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Atlanta",
    temperature: 86,
    date: "Thursday 9/10/20",
    time: "9:00AM ET",
    description: "Cloudy",
    humidity: 80,
    wind: 7,
    precipitation: 15,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          className="form-control"
          placeholder="Please Enter a City..."
          autofocus="on"
          autocomplete="off"
        />
        <input type="submit" className="form-button" value="Get Forecast" />
      </form>
      <button type="button" className="button">
        Current Location
      </button>
      <h1>{weatherData.city}</h1>
      <span className="subheader">
        <small>
          <span className="subheader">{weatherData.date}</span>
          <span className="subheader">{weatherData.time}</span>
        </small>
        <span className="subheader" id="description">
          {weatherData.description}
        </span>
      </span>
      <div className="icon">
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="dark gray"
          size={100}
          animate={true}
        />
      </div>
      <h2>
        <span className="current-temp">{weatherData.temperature}</span>
        <span className="temp-units">
          <a href="/" className="far-temp">
            °F
          </a>
          <span className="pipe">|</span>
          <span className="temp-units">
            <a href="/" className="cels-temp">
              °C
            </a>
          </span>
        </span>
      </h2>
      <ul className="details">
        <li>{weatherData.precipitation}% precipitation</li>
        <li>{weatherData.humidity}% humidity</li>
        <li>
          {weatherData.wind}
          mph wind
        </li>
      </ul>
      <div className="five-hour-forecast">5-Hour Forecast</div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h4 className="forecast-time">3PM</h4>
            <ReactAnimatedWeather
              className="forecast-icon"
              icon="WIND"
              color="blue"
              size={75}
              animate={true}
            />

            <span className="temp">65 / 54</span>
          </div>
        </div>
      </div>
    </div>
  );
}
