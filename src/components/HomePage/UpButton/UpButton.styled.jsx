import styled from "styled-components";
import { lightOrange, lightRed } from "../../../utils/colors";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${lightOrange};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background-color: ${lightRed};
  }
`;
