import styled from "styled-components";
import {
  desertStorm,
  lightBlack,
  lightOrange,
  lightRed,
} from "../../../utils/colors";
import { desktop } from "../../../utils/viewpoints";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  ${desktop} {
    width: 1200px;
    padding: 32px 15px;
  }
`;
const LogoWrap = styled.div`
  svg {
    fill: ${lightBlack};
  }
`;
const LogOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  cursor: pointer;
  border: none;
  background-color: ${lightOrange};
  color: ${lightBlack};
  text-transform: uppercase;
  display: flex;
  gap: 5px;
  &:hover {
    background-color: ${lightRed};
    color: ${desertStorm};
  }
`;
export { Container, LogOut, LogoWrap };
