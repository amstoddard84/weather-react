import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "eaba586c718e9928d025519220f8eb35";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function initialCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = `eaba586c718e9928d025519220f8eb35`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(<WeatherInfo />);
    axios.get(apiUrl).then(<WeatherForecast />);
  }

  function currentCity() {
    navigator.geolocation.getCurrentPosition(initialCity);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Please Enter a City..."
            autofocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" className="form-button" value="Get Forecast" />
        </form>
        <button type="submit" className="button" onClick={currentCity}>
          ↺
        </button>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
