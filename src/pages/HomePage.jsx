import styled from "styled-components";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import Summary from "../components/HomePage/Summary";
import { bgColor, desertStorm } from "../utils/colors";
import Services from "../components/HomePage/Services";
import Portfolio from "../components/HomePage/Portfolio";
import Price from "../components/HomePage/Price";

const Container = styled.div`
  background-color: ${desertStorm};
`;
const LightContainer = styled.div`
  background-color: ${bgColor};
`;
const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <LightContainer>
        <Summary />
      </LightContainer>
      <Container>
        <Services />
        <Price />
      </Container>
      <LightContainer>
        <Portfolio />
      </LightContainer>
    </>
  );
};

export default HomePage;
