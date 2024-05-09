import {
  DateFormat,
  findMasterById,
  findMasterByIdUk,
} from "../../../data/enrollmentsHelper";
import { lightBlack } from "../../../utils/colors";
import PropTypes from "prop-types";
import { TiPen } from "react-icons/ti";
import { GiTrashCan } from "react-icons/gi";
import {
  Item,
  Btn,
  ClientWrap,
  MasterWrap,
  Descr,
  Date,
  DateWrap,
  Time,
  BtnList,
} from "./EnrollmentItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserRole } from "../../../store/auth/authSelectors";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import EnrollmentForm from "../EnrollmentForm/EnrollmentForm";
import { deleteEnrollmentsThunk } from "../../../store/enrollments/enrollmentsThunk";

const EnrollmentItem = ({ enrolment }) => {
  const { master, phone, enrolmentDate, enrolmentTime, ownerInfo } = enrolment;
  const [isOpen, setIsOpen] = useState(false);
  const role = useSelector(getUserRole);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  const handleDelete = (id) => {
    dispatch(deleteEnrollmentsThunk(id));
  };

  return (
    <>
      <Item>
        {role === "client" && (
          <BtnList>
            <li>
              <Btn onClick={() => setIsOpen(true)}>
                <TiPen size={25} color={lightBlack} />
              </Btn>
            </li>
            <li>
              <Btn onClick={() => handleDelete(enrolment._id)}>
                <GiTrashCan size={28} color={lightBlack} />
              </Btn>
            </li>
          </BtnList>
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
      {isOpen && (
        <EnrollmentForm onClose={() => setIsOpen(false)} data={enrolment} />
      )}
    </>
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
