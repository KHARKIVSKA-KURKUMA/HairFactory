import styled from "styled-components";
import Header from "../components/AuthComponents/Header";
import { desertStorm } from "../utils/colors";
import EnrollmentsList from "../components/AuthComponents/EnrollmentsList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMasterEnrollmentsThunk } from "../store/enrollments/enrollmentsThunk";
import { getUserEmail } from "../store/auth/authSelectors";
import { findMasterByEmail } from "../data/enrollmentsHelper";
import {
  getEnrollments,
  getEnrollmentsLoading,
} from "../store/enrollments/enrollmentsSelectors";
import NoDataNotification from "../components/Notification/NoDataNotification";
import LoaderForThunk from "../components/Loader/LoaderForThunk";

const Container = styled.div`
  background-color: ${desertStorm};
  min-height: calc(100dvh);
`;

const MasterPage = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  const masterId = findMasterByEmail(email);
  useEffect(() => {
    dispatch(getMasterEnrollmentsThunk(masterId));
  }, [dispatch, masterId]);
  const enrollments = useSelector(getEnrollments);
  const isLoad = useSelector(getEnrollmentsLoading);
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

export default MasterPage;
