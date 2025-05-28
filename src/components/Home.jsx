import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import UserInput from "./UserInput";
import SingleWeather from "./SingleWeather";
import WeatherDetails from "./WeatherDetails";
import fetchWeather from "../utility/fetchWeather";

function Home() {
  const [city, setCity] = useState(
    () => localStorage.getItem("latestCity") || ""
  );
  const [searchCity, setSearchCity] = useState(
    () => localStorage.getItem("latestCity") || ""
  );

  const [celsius, setCelsius] = useState(true);

  const normalizedCity = searchCity?.trim().toLowerCase();

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", normalizedCity],
    queryFn: () => fetchWeather(searchCity),
    enabled: !!searchCity,
    staleTime: 30000,
    retry: false,
    refetchInterval: 30000,
  });
  useEffect(() => {
    if (searchCity) {
      localStorage.setItem("latestCity", searchCity);
    }
  }, [searchCity, error]);

  if (isLoading)
    return (
      <p
        style={{
          fontSize: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Loading....
      </p>
    );

  const details = {
    city,
    setCity,
    searchCity,
    setSearchCity,
    celsius,
    setCelsius,
  };
  const nextDaysWeather = data?.slice(1);
  return (
    <div className="parent">
      <UserInput details={details} error={error} />

      {data && <SingleWeather item={data[0]} celsius={celsius} />}
      <div className="next-days-grid">
        {data &&
          nextDaysWeather.map((item, index) => (
            <WeatherDetails item={item} celsius={celsius} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Home;
