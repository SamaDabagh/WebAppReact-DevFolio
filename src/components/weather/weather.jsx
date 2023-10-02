import React, { useState } from "react";
import axios from "axios";
const Weather = () => {
  const apiWeatherKeys = "291ed2f8f4b581aae9cdc709591426d2";

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const units = "metric";
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeatherKeys}&units=${units}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="form__group">
      <div className="feature-box weather_container form__group">
        <h3>Weather Data</h3>
        <input
          className="weather_input form__input"
          placeholder="Enter City ..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        {typeof weatherData?.main === "undefined" ? (
          <div className="massage-sub-box">
            Welcome to weather app! Enter in a city to get the weather of.
          </div>
        ) : (
          <div className="massage-sub-box">
            <h2>
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        )}
      </div>
      <div className="form__group msg_btn">
        <button
          type="submit"
          className="btn btn--white"
          onClick={getWeatherData}
        >
          Find The Weather
        </button>
      </div>
    </div>
  );
};

export default Weather;
