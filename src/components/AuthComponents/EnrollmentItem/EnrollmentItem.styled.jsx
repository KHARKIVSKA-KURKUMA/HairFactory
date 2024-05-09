import styled from "styled-components";
import {
  bgColor,
  lightBlack,
  lightOrange,
  lightYellow,
} from "../../../utils/colors";

const Item = styled.li`
  padding: 20px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  background-color: ${bgColor};
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BtnList = styled.ul`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  gap: 10px;
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-color: ${lightYellow};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms background-color linear;
  &:hover,
  &:focus {
    background-color: ${lightOrange};
  }
`;
const ClientWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 20px;
  margin-top: ${(props) => (props.role === "client" ? "60px" : "20px")};
`;

const MasterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
`;

const Descr = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const DateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
`;
const Date = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid ${lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Time = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${lightBlack};
`;

export {
  Item,
  BtnList,
  Btn,
  ClientWrap,
  MasterWrap,
  Descr,
  Date,
  DateWrap,
  Time,
};
