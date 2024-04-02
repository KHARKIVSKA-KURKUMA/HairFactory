import styled from "styled-components";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero/Hero";

const Container = styled.div`
  background-color: #efe6dd;
`;
const HomePage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default HomePage;
