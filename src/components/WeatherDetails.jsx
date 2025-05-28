import React from "react";

const WeatherDetails = ({ item, celsius }) => {
  return (
    <div className="weather-card">
      <div className="weather-card-columns">
        <div className="weather-icon-column">
          <img src={item.icon} alt="weather icon" className="weather-icon" />
        </div>
        <ul className="weather-card-details">
          {/* <li className="city">{item.name}</li> */}
          <li>{item.date}</li>

          <li className="temp">
            {celsius
              ? `${item.maxtemp_c}°C / ${item.mintemp_c}°C`
              : `${item.maxtemp_f}°F / ${item.mintemp_f}°F`}
          </li>
          <li>Wind: {item.speed} km/h</li>
          <li>Humidity: {item.humidity}%</li>
          <li>{item.condition}</li>
          <li>{item.dayOfWeek}</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDetails;
