import styled from "styled-components";
import Header from "../components/AuthComponents/Header";
import { desertStorm } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnrollments,
  getEnrollmentsLoading,
} from "../store/enrollments/enrollmentsSelectors";
import NoDataNotification from "../components/Notification/NoDataNotification";
import EnrollmentsList from "../components/AuthComponents/EnrollmentsList";
import LoaderForThunk from "../components/Loader/LoaderForThunk";
import { useEffect } from "react";
import { getEnrollmentsThunk } from "../store/enrollments/enrollmentsThunk";
import AddEnrolment from "../components/AuthComponents/AddEnrolment";

const Container = styled.div`
  background-color: ${desertStorm};
  min-height: calc(100dvh);
`;

const ClientPage = () => {
  const enrollments = useSelector(getEnrollments);
  const isLoad = useSelector(getEnrollmentsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrollmentsThunk());
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <AddEnrolment />
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
