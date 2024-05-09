import styled from "styled-components";
import Header from "../components/AuthComponents/Header";
import { desertStorm } from "../utils/colors";
import { useSelector } from "react-redux";
import {
  getEnrollments,
  getEnrollmentsLoading,
} from "../store/enrollments/enrollmentsSelectors";
import NoDataNotification from "../components/Notification/NoDataNotification";
import EnrollmentsList from "../components/AuthComponents/EnrollmentsList";
import LoaderForThunk from "../components/Loader/LoaderForThunk";

const Container = styled.div`
  background-color: ${desertStorm};
  min-height: calc(100dvh);
`;

const ClientPage = () => {
  const enrollments = useSelector(getEnrollments);
  const isLoad = useSelector(getEnrollmentsLoading);
  console.log("isLoad :>> ", isLoad);
  return (
    <Container>
      <Header />
      {!isLoad ? (
        enrollments.length !== 0 ? (
          <EnrollmentsList enrollments={enrollments} />
        ) : (
          <NoDataNotification />
        )
      ) : (
        <LoaderForThunk />
      )}
    </Container>
  );
};

export default ClientPage;
