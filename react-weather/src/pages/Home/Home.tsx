import React from "react";
import { HomeWrapper, ThisDayBlock } from "./styles";
import Header from "../../Header";
import ThisDay from "../../ThisDay/index";
import ThisDayInfo from "../../ThisDayInfo";
import AlllDays from "../../AllDays";

const Home = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AlllDays />
    </HomeWrapper>
  );
};

export default Home;
