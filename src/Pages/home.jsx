import React, { useState, useEffect } from 'react';
import './home.css'



const home = () => {
  const [forecastData, setForecastData] = useState([]);
  const apiKey = '437949523ee2d6306c8fcaad1eeb8d03';
  const city = 'München';
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setForecastData(data.list);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  return (
    <div className='home-target'>
      <p className='w-data' >
        {forecastData.map((forecast, index) => (
          <p key={index}>
            <div className='b-data' >
            <h2>{city}</h2>
            <strong>{new Date(forecast.dt_txt).toLocaleDateString('de-DE')}</strong>
            <p>Temperature: {Math.round(forecast.main.temp)}°C</p>
            <p>Condition: {forecast.weather[0].description}</p>
            <img className='w-image'
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            </div>
          </p>
        ))}
      </p>
    </div>
  );
};

export default home;
