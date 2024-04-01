import styled from "styled-components";
import Header from "../components/HomePage/Header";

const Container = styled.div`
  background-color: #efe6dd;
`;
const HomePage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default HomePage;
