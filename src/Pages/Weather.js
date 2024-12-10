

import React, { useEffect, useState } from 'react';
import './Weather.css';
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'



const weatherIcons = {
  Clear: clear,
  Clouds: cloud,
  Rain: rain,
  Snow: snow,

};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '4c7aec0fc0209c43312399292fba0ac3';
      const city = 'Chandigarh';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch weather data.');
        const data = await response.json();
        
     
        const condition = data.weather[0].main; 
        const iconUrl = weatherIcons[condition] || 'path/to/default-icon.png';  
      
        setWeatherData({ ...data, iconUrl });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div className="weather-container">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div className="weather-container">Loading...</div>;
  }

  const { main, weather, wind, iconUrl } = weatherData;

  return (
    <div className="weather-container">
      <h2>Weather in Chandigarh</h2>
      <div className="weather-card">
        {/* Display the custom icon based on the weather condition */}
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <p>Temperature: {main.temp}°C</p>
        <p>Condition: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
