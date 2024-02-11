import styled from "styled-components";
import { Container } from "../Container.styles";

export const AllDaysWrapper = styled(Container)`
  border-radius: 20px;
  padding: 20px;
  min-height: 170px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 20px;

  @media (max-width: 980px) {
    width: 350px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
