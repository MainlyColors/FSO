import { useState, useEffect } from 'react';

export default function TodaysWeather({ country }) {
  const [weather, setWeather] = useState({});

  const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    console.log('weather effect ran');
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&units=imperial&APPID=${api_key}`
    )
      .then((stream) => stream.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  return (
    <>
      <h2>{country.capital}</h2>
      <p>temperature {weather.main?.temp} Fahrenheit</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
        alt={
          weather in weather ? weather.weather.description : "img didn't load"
        }
      />
      <p>wind {weather.wind?.speed} mph</p>
    </>
  );
}
