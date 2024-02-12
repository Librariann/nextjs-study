import React from "react";
import { BottomPart, DayWrapper, TopPart } from "./style";
import { IDay } from "../utils/useWeatherForecast";

interface DayProps {
  day: IDay;
}

const Day = ({ day }: DayProps) => {
  const { date, forecast } = day;

  const temp = Math.max(...forecast.map((x) => Math.round(x.main.temp)));
  const lowestTemp = Math.min(...forecast.map((x) => Math.round(x.main.temp)));

  const weekDays = new Date(date);

  const dayOfWeek = weekDays.toDateString().substring(0, 3);

  const dates = date.split("-").join(".").substring(5);
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>{dayOfWeek}</h2>
          <h3>{dates}</h3>
        </div>
      </TopPart>
      <BottomPart>
        <h2>{temp}도</h2>
        <h3>{lowestTemp}</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
