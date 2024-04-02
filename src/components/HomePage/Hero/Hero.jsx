import styled from "styled-components";
import { desktop } from "../../../utils/viewpoints";

export const Container = styled.div`
  width: 100%;
  padding: 15px 0 0;
  margin: 0 auto;
  ${desktop} {
    width: 1200px;
    padding: 32px 15px;
  }
`;

const Hero = () => {
  return <Container>Hero.jsx</Container>;
};

export default Hero;
