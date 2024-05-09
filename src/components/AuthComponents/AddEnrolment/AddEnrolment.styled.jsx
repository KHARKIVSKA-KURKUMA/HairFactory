import styled from "styled-components";
import { lightBlack, lightOrange } from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  cursor: pointer;
  border: none;
  background-color: ${lightOrange};
  color: ${lightBlack};
  text-transform: uppercase;
  font-size: 20px;
  gap: 5px;
  border-radius: 15px;
`;
export { Container, Btn };
