import React from "react";
import useWeather from "../utils/useWeather";
import { useParams } from "react-router-dom";

const ThisDay = () => {
  const { id } = useParams();

  const { data, isLoading } = useWeather(id ? id : "seoul");

  const temperature = Math.round(data?.main.temp || 0);

  const cityName = data?.name;

  const weatherIcon = data?.weather[0].main;
  const weatherId = data?.weather[0].id;

  let imageSrc = "./images/mainly_cloudy.svg";

  if (weatherIcon === "Clear") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";
  } else if (weatherIcon === "Clouds" && (weatherId || 0) >= 803) {
    imageSrc = "./images/weatherIcons/broken-clouds.svg";
  } else if (weatherIcon === "Clouds" && (weatherId || 0) < 803) {
    imageSrc = "./images/weatherIcons/few-clouds.svg";
  } else if (weatherIcon === "Atmosphere") {
    imageSrc = "./images/weatherIcons/mist.svg";
  } else if (weatherIcon === "Rain") {
    imageSrc = "./images/weatherIcons/rain.svg";
  } else if (weatherIcon === "Rain" && (weatherId || 0) > 505) {
    imageSrc = "./images/weatherIcons/shower-rain.svg";
  } else if (weatherIcon === "Snow") {
    imageSrc = "./images/weatherIcons/snow.svg";
  } else if (weatherIcon === "Thunderstorm") {
    imageSrc = "./images/weatherIcons/thunderstorm.svg";
  }

  return <div>ThisDay</div>;
};

export default ThisDay;
