function SingleWeather({ item, celsius }) {
  return (
    <div className="single-weather-card">
      <ul className="weather-details">
        <li className="city-name">{item.name}</li>
        <li className="date">{item.date}</li>
        <li className="temp">
          {celsius
            ? `${item.maxtemp_c}°C / ${item.mintemp_c}°C`
            : `${item.maxtemp_f}°F / ${item.mintemp_f}°F`}
        </li>
        <li className="speed">Wind: {item.speed} km/h</li>
        <li className="humidity">Humidity: {item.humidity}%</li>
        <li className="condition">{item.condition}</li>
        <li className="day">{item.dayOfWeek}</li>
      </ul>
      <img src={item.icon} alt="weather icon" className="weather-icon-large" />
    </div>
  );
}

export default SingleWeather;
