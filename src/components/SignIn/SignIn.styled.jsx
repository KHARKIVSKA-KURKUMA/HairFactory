import styled from "styled-components";
import bgImg from "../../img/loginBgBigImg.png";
import { Link } from "react-router-dom";
import {
  bgColor,
  disableColor,
  lightBlack,
  lightOrange,
  lightRed,
} from "../../utils/colors";
import { desktop } from "../../utils/viewpoints";

export const Container = styled.div`
  background-color: ${bgColor};
  width: 100vw;
  position: fixed;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  ${desktop} {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const HomeLink = styled(Link)`
  position: absolute;
  left: 20px;
  top: 15px;
`;

export const SignInWrap = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 450px;
  position: relative;
  border-radius: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${lightOrange};
  }
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${lightRed};
  }
`;

export const Decr = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-bottom: 10px;
  color: ${lightBlack};
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 0;
  font-family: "Pacifico", cursive;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  color: ${lightBlack};
  border: none;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: 700;
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

export const SignUpWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${lightBlack};
  font-weight: 700;
  transition: color 300ms linear;
  &:hover,
  &:focus {
    color: ${lightRed};
  }
`;
export const SignUpDecr = styled.p``;
