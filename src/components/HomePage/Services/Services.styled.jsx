import styled from "styled-components";
import { hugeDesktop, phone, tablet } from "../../../utils/viewpoints";
import { lightGreenC } from "../../../utils/colors";

const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  ${tablet} {
    padding: 60px 0;
  }
  img {
    height: 400px;
    margin: 0 auto;
    border-radius: 24px;
    ${tablet} {
      height: 500px;
    }
    ${hugeDesktop} {
      height: 650px;
    }
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

export { Desc, Title, Container };
