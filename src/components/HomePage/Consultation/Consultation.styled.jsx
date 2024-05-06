import { desktop, tablet } from "../../../utils/viewpoints";
import {
  bgColor,
  lightGreenC,
  lightOrange,
  lightRed,
} from "../../../utils/colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 64px 15px;
  flex-direction: column;
  ${tablet} {
    padding: 64px 100px;
  }
  ${desktop} {
    padding: 64px 60px;
    flex-direction: row;
  }
`;
const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  border-radius: 60px;
  border: 5px solid ${lightGreenC};
  ${desktop} {
    width: 500px;
    height: 500px;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  font-size: 42px;
  line-height: 0.85;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 15px;
  ${tablet} {
    font-size: 72px;
  }
`;
const Descr = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  color: ${lightGreenC};
  margin-bottom: 32px;
  display: block;
  text-align: center;
  z-index: 12;
  position: relative;
  ${tablet} {
    font-size: 20px;
  }
  ${desktop} {
    text-align: left;
  }
`;
const Star = styled.img`
  display: none;
  ${desktop} {
    display: block;
    position: absolute;
    right: -55px;
    top: 80px;
    z-index: 1;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${desktop} {
    align-items: flex-start;
  }
  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${lightRed};
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 100%;
    ${desktop} {
      width: 400px;
    }
    .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${lightOrange};
      border-radius: 24px;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${lightRed};
    }
  }

  .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root {
    width: 100%;
    transition: 500ms border linear;
    ${desktop} {
      width: 550px;
    }
    .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${lightOrange};
      border-radius: 24px;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 2px solid ${lightRed};
    }
  }
`;
const Btn = styled.button`
  padding: 6px 34px;
  background-color: ${lightRed};
  color: ${bgColor};
  font-size: 20px;
  line-height: 1.4;
  margin: 0 auto;
  ${desktop} {
    margin: 0;
  }
`;

export { Container, Wrap, Img, Title, Descr, Btn, Star, Form };
