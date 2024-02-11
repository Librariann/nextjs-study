import React from "react";
import { useParams } from "react-router-dom";
import useWeatherForecast from "../utils/useWeatherForecast";

const AlllDays = () => {
  const { id } = useParams();

  const { days, isLoading } = useWeatherForecast(id ? id : "seoul");

  return <div>AlllDays</div>;
};

export default AlllDays;
