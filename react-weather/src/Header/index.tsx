import React from "react";
import { Container } from "../Container.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CitySelect from "./CitySelect/CitySelect";

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <Logo>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
        <h2>날씨 앱</h2>
      </Logo>
      <CitySelect />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(Container)`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #4793ff;
  }
`;
