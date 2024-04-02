import styled from "styled-components";
import { lightBlack, lightOrange } from "../../../utils/colors";

export const List = styled.ul`
  display: flex;
  gap: 20px;
  :nth-last-child(1) {
    ::after {
      display: none;
    }
  }
  ${(props) =>
    !props.isDesktop &&
    `margin: 40px 0 30px;
    justify-content: center;
  `}
`;
export const Item = styled.li`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    bottom: 0;
    right: -12px;
    background-color: ${lightBlack};
    border-radius: 25%;
  }
`;

export const Link = styled.button`
  transition: color 300ms linear;
  color: ${lightBlack};
  font-size: 15px;
  line-height: 1.4;
  background-color: transparent;
  &:hover,
  &:focus {
    color: ${lightOrange};
  }
  ${(props) =>
    !props.isDesktop &&
    `
  font-size: 25px;
    `}
`;
