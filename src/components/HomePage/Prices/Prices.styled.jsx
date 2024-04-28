import styled from "styled-components";
import { desktop, phone, tablet } from "../../../utils/viewpoints";
import Background from "../../../img/priceBg.png";
import { bgGradient, lightBlack } from "../../../utils/colors";

const Container = styled.div`
  padding-top: 40px;
  background-image: ${bgGradient}, url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  padding-bottom: 64px;
  ${desktop} {
    max-width: 100%;
    height: 100%;
  }
`;
const Title = styled.h3`
  font-family: "Oranienbaum";
  font-size: 62px;
  line-height: 0.85;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 10px;
  font-weight: 400;
  ${tablet} {
    font-size: 72px;
  }
`;

const PriceBlock = styled.div`
  margin-bottom: 30px;
  position: relative;
  max-width: 100%;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${desktop} {
    max-width: 600px;
    margin: 0 auto 30px;
  }
`;

const PriceTypeService = styled.p`
  font-size: 30px;
  line-height: 0.85;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 10px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${lightBlack};
  }
  &::before {
    content: "";
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${lightBlack};
  }
  ${tablet} {
    font-size: 35px;
  }
`;

const TypePriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Type = styled.p`
  padding-left: 10px;
  font-size: 15px;
  line-height: 1.4;
  ${phone} {
    font-size: 17px;
  }
  ${tablet} {
    font-size: 20px;
  }
`;

const Price = styled.p`
  font-size: 15px;
  line-height: 1.4;
  ${tablet} {
    font-size: 20px;
  }
`;
export {
  Container,
  Title,
  Type,
  Price,
  PriceBlock,
  PriceTypeService,
  TypePriceWrap,
};
