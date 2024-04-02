import styled from "styled-components";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import Summary from "../components/HomePage/Summary";
import { bgColor, desertStorm } from "../utils/colors";

const Container = styled.div`
  background-color: ${desertStorm};
`;
const SummaryContainer = styled.div`
  background-color: ${bgColor};
`;
const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
      <SummaryContainer>
        <Summary />
      </SummaryContainer>
    </>
  );
};

export default HomePage;
