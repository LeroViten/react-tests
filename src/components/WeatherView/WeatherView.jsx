export default function WeatherView({ cityName }) {
  return (
    <div>
      <h2>Weather for {cityName.name}</h2>
      <p>Forecast: {cityName.weather[0].main}</p>
      {/* {https://openweathermap.org/img/wn/{cityName.weather[0].icon}.png} */}
      <p>Temperature: {Math.round(cityName.main.temp - 273.15)} °C</p>
      <p>Humidity: {cityName.main.humidity}</p>
      <p>Wind Speed: {cityName.wind.speed} km/h</p>
      <p>Sunrise: {new Date(cityName.sys.sunrise * 1000).toString()}</p>
      <p>Sunset: {new Date(cityName.sys.sunset * 1000).toString()}</p>
    </div>
  );
}
