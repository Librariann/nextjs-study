import React from "react";
import { useParams } from "react-router-dom";
import useWeatherForecast from "../utils/useWeatherForecast";
import { AllDaysWrapper } from "./style";
import Day from "./Day";

const AlllDays = () => {
  const { id } = useParams();

  const { days, isLoading } = useWeatherForecast(id ? id : "seoul");
  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day key={day.date} day={day} />
      ))}
    </AllDaysWrapper>
  );
};

export default AlllDays;
