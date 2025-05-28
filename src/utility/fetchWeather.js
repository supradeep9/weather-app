import axios from "axios";

const fetchWeather = async (searchCity) => {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=aea41ab16cd443f8b1e52028252705&q=${searchCity}&days=5`
  );
  console.log("every 30 seconds");
  const data = res.data;

  let arr = data.forecast.forecastday;

  let result = arr.map((item) => {
    let day = item?.day;
    const currentDayStr = item.date;
    const currentDay = new Date(currentDayStr);
    return {
      name: data.location.name,
      date: item.date,
      maxtemp_c: day.maxtemp_c,
      maxtemp_f: day.maxtemp_f,
      mintemp_c: day.mintemp_c,
      mintemp_f: day.mintemp_f,
      humidity: day.avghumidity,
      speed: day.maxwind_kph,
      icon: day.condition.icon,
      condition: day.condition.text,
      dayOfWeek: currentDay.toLocaleDateString("en-US", { weekday: "long" }),
    };
  });

  return result;
};

export default fetchWeather;
