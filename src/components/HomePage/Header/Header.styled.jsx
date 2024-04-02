import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import {
  desertStorm,
  lightBlack,
  lightOrange,
  lightRed,
} from "../../../utils/colors";
import { desktop } from "../../../utils/viewpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  ${desktop} {
    width: 1200px;
    padding: 32px 15px;
  }
`;

export const Link = styled.a`
  transition: color 300ms linear;
  color: ${lightBlack};
  font-size: 15px;
  line-height: 1.4;
  &:hover,
  &:focus {
    color: ${lightOrange};
  }
`;
export const CallBtn = styled.a`
  transition: color 300ms linear;
  color: ${lightBlack};
  font-size: 15px;
  line-height: 1.4;
  background-color: ${lightOrange};
  border-radius: 24px;
  padding: 10px 20px;
`;

export const HeaderNavWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 32px;
  margin-right: 64px;
`;

export const Nav = styled.nav``;
export const NavItem = styled.li``;

export const EnrollInfoHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const MenuOpenButton = styled.button`
  background-color: transparent;
  border: transparent;
  align-items: center;
  display: flex;
  z-index: 1;
`;

export const LogoWrap = styled.div`
  svg {
    fill: ${lightBlack};
  }
`;

export const AuthBtn = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  line-height: 1.4;
  background-color: ${lightRed};
  color: ${desertStorm};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPhone = styled(FaPhone)`
  margin-right: 5px;
`;
