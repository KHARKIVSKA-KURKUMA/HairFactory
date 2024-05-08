import styled from "styled-components";
import NoData from "../../img/nothing-to-show.png";
import { tablet } from "../../utils/viewpoints";

const Container = styled.div`
  display: flex;
  padding: 20px 30px 50px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
`;

const Heading = styled.h2`
  font-size: 34px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
  ${tablet} {
    text-align: start;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  ${tablet} {
    text-align: start;
  }
`;

const NoDataNotification = () => {
  return (
    <Container>
      <Image src={NoData} alt="No Data Poster" />
      <Heading>Nothing to show!</Heading>
      <Paragraph>Sorry, you have no enrollments to display.</Paragraph>
    </Container>
  );
};

export default NoDataNotification;
