import { useQuery } from "@tanstack/react-query";
import openWeather from "./openWeather";
import { useMemo } from "react";

export interface Day {
  date: string;
  forecast: { [x: string]: any }[];
}

const getWeatherForecast = (city: string) =>
  openWeather.getThreeHourForecastByCityName({
    cityName: city,
  });

const useWeatherForecast = (city: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["weather-forecase", city],
    queryFn: () => getWeatherForecast(city),
  });
  const days = useMemo(() => {
    const days: Record<string, Day> = {};

    data?.list?.forEach((forecast) => {
      const date = forecast.dt_txt.split(" ")[0];
      let day = days[date];
      if (!day) {
        day = { date, forecast: [] };
        days[date] = day;
      }
      day.forecast.push(forecast);
    });
    return Object.values(days);
  }, [data]);

  return {
    ...rest,
    data,
    days,
  };
};

export default useWeatherForecast;
