import styled from "styled-components";
import { desktop, phone, tablet } from "../../../utils/viewpoints";
import { bgColor, lightBlack, lightGreenC } from "../../../utils/colors";

const Container = styled.div`
  padding-bottom: 100px;
  position: relative;
  padding-top: 64px;
  padding: 64px 10px 100px;
  ${phone} {
    padding: 64px 40px 100px;
  }
  ${tablet} {
    padding: 64px 10px 100px;
  }
  ${desktop} {
    padding: 64px 60px 100px;
  }
  .react-multi-carousel-track {
    ${tablet} {
      gap: 16px;
    }
  }
  .react-multi-carousel-dot-list {
    bottom: 65px;
  }
`;

const Title = styled.h2`
  font-family: "Oranienbaum";
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 60px;
  line-height: 0.85;
  ${phone} {
    font-size: 72px;
  }
`;
const Description = styled.p`
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
const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
`;
const Image = styled.img`
  border-radius: 24px;
  width: 100%;
  ${tablet} {
    height: 290px;
  }
`;
const AboutWrap = styled.div`
  position: absolute;
  transform: translateY(100%);
  overflow: auto;
  opacity: 0.9;
  background: ${bgColor};
  border-radius: 24px;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: transform 500ms linear;
  ${Wrap}:hover &,
  ${Wrap}:focus & {
    transform: translateY(-100%);
  }
`;
const Name = styled.h3`
  font-family: "Montserrat";
  font-size: 20px;
  line-height: 1.4;
  color: ${lightBlack};
  margin-bottom: 10px;
`;
const Descr = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${lightBlack};
  margin-bottom: 30px;
`;

export { Container, Title, Descr, Description, Wrap, AboutWrap, Name, Image };
