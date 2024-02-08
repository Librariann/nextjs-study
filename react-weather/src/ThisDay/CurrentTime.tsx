import React from "react";
import { useTime } from "../utils/useTime";

const options: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

const CurrentTime = () => {
  const currentTime = useTime(1000);

  const time = new Intl.DateTimeFormat("ko-KR", options).format(currentTime);
  return <div>{time}</div>;
};

export default CurrentTime;
