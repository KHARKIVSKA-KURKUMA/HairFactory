import styled from "styled-components";
import {
  desktop,
  hugeDesktop,
  phone,
  smallDesktop,
  tablet,
} from "../../../utils/viewpoints";
import {
  desertStorm,
  lightGreenC,
  lightRed,
  lightYellow,
} from "../../../utils/colors";

const Container = styled.div`
  width: 100%;
  padding: 15px 0px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
  ${desktop} {
    width: 1200px;
    padding: 32px 30px;
  }
`;
const HeroWrap = styled.div`
  margin-top: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tablet} {
    padding: 0;
    margin-left: 20px;
  }
  ${smallDesktop} {
    align-items: flex-start;
    margin-left: 32px;
    margin-top: 150px;
  }
`;
const Title = styled.h1`
  font-family: "Oranienbaum";
  font-weight: 400;
  font-size: 32px;
  line-height: 0.85;
  letter-spacing: -0.015em;
  max-width: 590px;
  margin-bottom: 15px;
  text-align: center;
  ${phone} {
    font-size: 42px;
  }
  ${tablet} {
    max-width: 400px;
    font-size: 38px;
  }
  ${smallDesktop} {
    text-align: left;
    font-size: 42px;
    max-width: 590px;
    z-index: 1;
  }
`;
const PictureHolder = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${lightYellow};
  position: relative;
  border-radius: 50%;
  ${phone} {
    width: 400px;
    height: 400px;
  }
  ${tablet} {
    width: 300px;
    height: 300px;
  }
  ${smallDesktop} {
    width: 500px;
    height: 500px;
  }
`;
const Picture = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 220px;
  ${phone} {
    width: 210px;
    height: auto;
  }
  ${tablet} {
    width: 180px;
    height: 220px;
  }
  ${smallDesktop} {
    width: 270px;
    height: auto;
  }
`;
const Description = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${lightGreenC};
  margin-bottom: 32px;
  text-align: center;
  ${phone} {
    font-size: 20px;
  }
  ${tablet} {
    font-size: 18px;
    max-width: 420px;
  }
  ${smallDesktop} {
    text-align: left;
  }
`;
const MoreBtn = styled.button`
  background-color: ${lightRed};
  color: ${desertStorm};
  padding: 10px 40px;
  ${phone} {
    font-size: 25px;
  }
`;

const StarRight = styled.img`
  display: none;
  ${tablet} {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(140px);
  }
  ${smallDesktop} {
    top: 0;
    transform: translateY(0px);
  }
  ${hugeDesktop} {
    transform: translateX(120px);
  }
`;
const StarLeft = styled.img`
  display: none;
  ${desktop} {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(150px);
  }
  ${hugeDesktop} {
    transform: translateX(-120px);
  }
`;
export {
  Container,
  HeroWrap,
  StarLeft,
  StarRight,
  Title,
  MoreBtn,
  Description,
  Picture,
  PictureHolder,
};
