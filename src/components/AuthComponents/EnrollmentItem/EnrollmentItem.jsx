import {
  DateFormat,
  findMasterById,
  findMasterByIdUk,
} from "../../../data/enrollmentsHelper";
import { lightBlack } from "../../../utils/colors";
import PropTypes from "prop-types";
import { TiPen } from "react-icons/ti";
import {
  Item,
  Btn,
  ClientWrap,
  MasterWrap,
  Descr,
  Date,
  DateWrap,
  Time,
} from "./EnrollmentItem.styled";
import { useSelector } from "react-redux";
import { getUserRole } from "../../../store/auth/authSelectors";
import { useTranslation } from "react-i18next";

const EnrollmentItem = ({ enrolment }) => {
  const { master, phone, enrolmentDate, enrolmentTime, ownerInfo } = enrolment;
  const role = useSelector(getUserRole);
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  return (
    <Item>
      {role === "client" && (
        <Btn>
          <TiPen size={25} color={lightBlack} />
        </Btn>
      )}
      <ClientWrap role={role}>
        <Descr>{t("enrollments.client")}</Descr>
        <Descr>{ownerInfo.username}</Descr>
        <Descr>{phone}</Descr>
      </ClientWrap>
      <MasterWrap>
        <Descr>{t("enrollments.master")}</Descr>
        {lang === "uk" ? (
          <Descr>{findMasterByIdUk(master)}</Descr>
        ) : (
          <Descr>{findMasterById(master)}</Descr>
        )}
      </MasterWrap>
      <DateWrap>
        <Date> {DateFormat(enrolmentDate)}</Date>
        <Time>{enrolmentTime}</Time>
      </DateWrap>
    </Item>
  );
};

EnrollmentItem.propTypes = {
  enrolment: PropTypes.shape({
    master: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    enrolmentDate: PropTypes.string.isRequired,
    enrolmentTime: PropTypes.string.isRequired,
    ownerInfo: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EnrollmentItem;
