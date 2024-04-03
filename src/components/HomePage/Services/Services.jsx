import styled from "styled-components";
import { lightGreenC } from "../../../utils/colors";

const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
const CenterImg = styled.img`
  max-width: 398px;
  max-height: 446px;
  border-radius: 24px;
`;
const SideWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  img {
    max-width: 370px;
    max-height: 215px;
    border-radius: 24px;
  }
`;
const Container = styled.div`
  padding-top: 80px;
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 72px;
  line-height: 0%.85;
`;
const Desc = styled.p`
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
  color: ${lightGreenC};
  margin-bottom: 65px;
`;

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <Desc>We only work with hair, but we do it amazingly well</Desc>
    </Container>
  );
};

export default Services;
