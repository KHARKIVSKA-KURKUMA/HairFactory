import styled from "styled-components";
import { lightGreenC } from "../../../utils/colors";
import Services1 from "../../../img/services-1.jpg";
import Services2 from "../../../img/services-2.webp";
import Services3 from "../../../img/services-3.jpg";
import Services4 from "../../../img/services-4.jpg";
import ServicesC1 from "../../../img/services-center.jpg";
import {
  desktop,
  phone,
  smallDesktop,
  tablet,
} from "../../../utils/viewpoints";

const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  ${smallDesktop} {
    flex-wrap: nowrap;
  }
`;
const CenterImg = styled.img`
  border-radius: 24px;
  width: calc(100% - 30px);
  ${tablet} {
    max-width: 245px;
    height: 296px;
  }
  ${smallDesktop} {
    max-width: 350px;
    height: 446px;
  }
  ${desktop} {
    width: 398px;
  }
`;
const SideWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  img {
    width: calc(100% - 30px);
    border-radius: 24px;
    ${tablet} {
      width: 245px;
      height: 140px;
    }
    ${smallDesktop} {
      width: 350px;
      height: 215px;
    }
    ${desktop} {
      width: 370px;
    }
  }
`;
const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  ${tablet} {
    padding: 60px 0;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 60px;
  line-height: 0%.85;
  ${phone} {
    font-size: 72px;
  }
`;
const Desc = styled.p`
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  color: ${lightGreenC};
  margin-bottom: 25px;
  ${phone} {
    font-size: 20px;
  }
  ${tablet} {
    margin-bottom: 45px;
  }
`;

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <Desc>We only work with hair, but we do it amazingly well</Desc>
      <Wrap>
        <SideWrap>
          <img src={Services1} alt="Services1" />
          <img src={Services2} alt="Services2" />
        </SideWrap>
        <CenterImg src={ServicesC1} alt="Services" />
        <SideWrap>
          <img src={Services3} alt="Services3" />
          <img src={Services4} alt="Services4" />
        </SideWrap>
      </Wrap>
    </Container>
  );
};

export default Services;
