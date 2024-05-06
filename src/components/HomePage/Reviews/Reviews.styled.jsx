import styled from "styled-components";
import { desktop, phone, tablet } from "../../../utils/viewpoints";
import {
  bgColor,
  lightBrown,
  lightGreenC,
  lightRed,
} from "../../../utils/colors";

const Container = styled.div`
  position: relative;
  padding: 34px 5px 60px;
  ${phone} {
    padding: 64px 20px 60px;
  }
  ${tablet} {
    padding: 64px 10px 60px;
  }
  ${desktop} {
    padding: 90px 60px 60px;
  }
  .react-multi-carousel-track {
    ${tablet} {
      gap: 10px;
    }
    ${desktop} {
      gap: 26px;
    }
  }
  .react-multi-carousel-dot-list {
    bottom: 30px;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  font-size: 62px;
  font-weight: 400;
  line-height: 0.85;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 64px;
  ${tablet} {
    font-size: 72px;
  }
`;
const Wrap = styled.div`
  display: flex;
  background-color: ${lightBrown};
  padding: 30px 12px;
  border-radius: 30px;
  align-items: center;
  ${phone} {
    padding: 32px;
    align-items: flex-start;
  }
  ${tablet} {
    padding: 12px;
    align-items: center;
  }
`;
const UserPic = styled.img`
  width: 150px;
  border-radius: 25px;
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  ${phone} {
    margin-left: 32px;
  }
  ${tablet} {
    margin-left: 12px;
  }
`;
const ServiceType = styled.p`
  font-size: 12px;
  line-height: 1.4;
  color: ${bgColor};
  max-width: 110px;
  padding: 4px 35px;
  border-radius: 24px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.type === "extension" ? lightRed : lightGreenC};
`;
const Name = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${lightGreenC};
  margin-bottom: 8px;
`;
const Text = styled.p`
  font-size: 13px;
  line-height: 1.4;
`;

export { Wrap, Container, Text, Title, ServiceType, Name, UserPic, About };
