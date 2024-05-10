import styled from "styled-components";
import { lightBlack, lightOrange } from "../../../utils/colors";
import { tablet } from "../../../utils/viewpoints";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: ${lightOrange};
  color: ${lightBlack};
  text-transform: uppercase;
  font-size: 15px;
  gap: 5px;
  ${tablet} {
    border-radius: 15px;
    padding: 15px 30px;
    font-size: 20px;
  }
`;
export { Container, Btn };
