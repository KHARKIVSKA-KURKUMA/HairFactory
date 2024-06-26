import styled from "styled-components";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import Summary from "../components/HomePage/Summary";
import { bgColor, desertStorm } from "../utils/colors";
import Services from "../components/HomePage/Services";
import Portfolio from "../components/HomePage/Portfolio";
import Prices from "../components/HomePage/Prices";
import Team from "../components/HomePage/Team";
import Reviews from "../components/HomePage/Reviews";
import Consultation from "../components/HomePage/Consultation";
import Footer from "../components/HomePage/Footer";
import UpButton from "../components/HomePage/UpButton";

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
        <Prices />
        <Team />
      </Container>
      <LightContainer>
        <Reviews />
        <Portfolio />
      </LightContainer>
      <Container>
        <Consultation />
        <Footer />
      </Container>
      <UpButton />
    </>
  );
};

export default HomePage;
