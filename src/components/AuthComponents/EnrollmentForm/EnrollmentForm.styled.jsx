import styled from "styled-components";
import DatePicker from "react-datepicker";
import {
  disableColor,
  lightBlack,
  lightOrange,
  lightRed,
} from "../../../utils/colors";
import { SlClose } from "react-icons/sl";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MasterWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 15px;
`;
const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid #ccc;
  z-index: 1000000;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const RadioLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  width: 180px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;
const UserPic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 10px;
`;
const DateInputContainer = styled.div`
  display: inline-block;
`;

const DateInput = styled(DatePicker)`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 56px;
  width: 190px;
`;
const DataTimeContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Btn = styled.button`
  padding: 10px 30px;
  color: ${lightBlack};
  border: none;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 18px;
  background-color: ${lightOrange};
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${lightRed};
  }
  &:disabled {
    background-color: ${disableColor};
  }
`;

const CloseBtn = styled(SlClose)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export {
  Backdrop,
  CloseBtn,
  Form,
  MasterWrap,
  FormContainer,
  RadioButton,
  RadioLabel,
  UserPic,
  Btn,
  DataTimeContainer,
  DateInput,
  DateInputContainer,
};
