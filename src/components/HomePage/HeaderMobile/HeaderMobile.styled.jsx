import styled from "styled-components";
import {
  desertStorm,
  lightBlack,
  lightOrange,
  lightRed,
} from "../../../utils/colors";

export const MenuMobile = styled.div`
  height: 100dvh;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${desertStorm};
  z-index: 100;
`;

export const MenuContainer = styled.div`
  padding: 50px 0px;
  position: relative;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  gap: 10px;
`;
export const Item = styled.li``;
export const Link = styled.a`
  color: ${lightBlack};
  font-size: 25px;
  line-height: 1.4;
`;
export const Nav = styled.nav``;
export const EnrollInfoHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const CallBtn = styled.a`
  transition: color 300ms linear;
  color: ${lightBlack};
  font-size: 15px;
  line-height: 1.4;
  background-color: ${lightOrange};
  border-radius: 24px;
  padding: 10px 15px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthBtn = styled.button`
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1.4;
  background-color: ${lightRed};
  color: ${desertStorm};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
`;
