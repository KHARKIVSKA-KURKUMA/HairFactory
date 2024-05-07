import styled from "styled-components";
import Header from "../components/AuthComponents/Header";
import { desertStorm } from "../utils/colors";

const Container = styled.div`
  background-color: ${desertStorm};
`;

const MasterPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default MasterPage;
