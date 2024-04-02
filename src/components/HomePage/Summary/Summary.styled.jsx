import styled from "styled-components";
import { desktop, phone, tablet } from "../../../utils/viewpoints";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px 15px;
  ${desktop} {
    width: 1200px;
    display: flex;
    justify-content: space-around;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${phone} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
  }
  ${tablet} {
    justify-content: space-evenly;
    gap: 30px;
  }
  ${desktop} {
    flex-wrap: nowrap;
  }
`;
const Item = styled.li``;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  margin-bottom: 20px;
  ${phone} {
    width: 200px;
  }
  ${tablet} {
    width: 270px;
    justify-content: space-evenly;
  }
`;
const Number = styled.p`
  font-family: "Oranienbaum";
  font-size: 52px;
  line-height: 0.85;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 20px;
  z-index: 1;
  ${desktop} {
    margin-bottom: 10px;
    font-size: 72px;
  }
`;
const Desk = styled.p`
  font-size: 19px;
  line-height: 1.4;
  text-align: center;
  padding-bottom: 10px;
  ${tablet} {
    padding-bottom: 0;
  }
`;
export { Container, Desk, Number, Item, ItemWrap, List };
