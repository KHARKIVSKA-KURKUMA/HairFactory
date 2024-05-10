import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Master1 from "../../../img/ksenia.jpg";
import Master2 from "../../../img/violeta.jpg";
import Master3 from "../../../img/natasha.jpg";
import {
  availableHours,
  convertTimeTo24HourFormat,
  convertToTimeFormat,
  extractDateString,
} from "../../../data/enrollmentsHelper";
import { TextField } from "@mui/material";
import {
  Backdrop,
  Form,
  MasterWrap,
  FormContainer,
  RadioButton,
  RadioLabel,
  UserPic,
  DataTimeContainer,
  DateInput,
  DateInputContainer,
  Btn,
  CloseBtn,
  StyledSelect,
} from "./EnrollmentForm.styled";
import { lightBlack } from "../../../utils/colors";
import { useDispatch } from "react-redux";
import {
  postEnrollmentsThunk,
  putEnrollmentsThunk,
} from "../../../store/enrollments/enrollmentsThunk";

const EnrollmentForm = ({ data, onClose }) => {
  const isEdited = data !== undefined;
  const dispatch = useDispatch();
  const [masterId, setMasterId] = useState(
    data !== undefined ? data.master : ""
  );
  const [hour, setHour] = useState(
    data !== undefined ? convertTimeTo24HourFormat(data.enrolmentTime) : "9"
  );
  const [date, setDate] = useState(
    data !== undefined ? data.enrolmentDate : null
  );
  const [phone, setPhone] = useState(data !== undefined ? data.phone : "");
  const [formCompleted, setFormCompleted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const isFormComplete = !!masterId && !!hour && !!date && !!phone;
    setFormCompleted(isFormComplete);
  }, [masterId, hour, date, phone]);

  const handleEnroll = () => {
    const updatedHour = convertToTimeFormat(hour);
    const updatedDate = extractDateString(date);
    const newEnrolment = {
      master: masterId,
      enrolmentDate: updatedDate,
      enrolmentTime: updatedHour,
      phone: phone,
    };
    if (isEdited) {
      dispatch(putEnrollmentsThunk({ enrolmentId: data._id, newEnrolment }));
    } else {
      dispatch(postEnrollmentsThunk(newEnrolment));
    }
    onClose();
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const filteredInput = input.replace(/\D/g, "");
    setPhone(filteredInput);
  };

  const filterPastDates = (date) => {
    return date >= new Date();
  };

  return (
    <Backdrop onClick={onClose}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn color={lightBlack} size={30} onClick={onClose} />
        <Form>
          <MasterWrap>
            <RadioLabel>
              <UserPic src={Master1}></UserPic>
              <RadioButton
                type="radio"
                value="663bc3ec5d6e499fdd7caea6"
                checked={masterId === "663bc3ec5d6e499fdd7caea6"}
                onChange={(event) => setMasterId(event.target.value)}
              />
              {t("enrollments.master1")}
            </RadioLabel>
            <RadioLabel>
              <UserPic src={Master3}></UserPic>
              <RadioButton
                type="radio"
                value="663bc3d85d6e499fdd7caea2"
                checked={masterId === "663bc3d85d6e499fdd7caea2"}
                onChange={(event) => setMasterId(event.target.value)}
              />
              {t("enrollments.master2")}
            </RadioLabel>
            <RadioLabel>
              <UserPic src={Master2}></UserPic>
              <RadioButton
                type="radio"
                value="663bc3ac5d6e499fdd7cae9e"
                checked={masterId === "663bc3ac5d6e499fdd7cae9e"}
                onChange={(event) => setMasterId(event.target.value)}
              />
              {t("enrollments.master3")}
            </RadioLabel>
          </MasterWrap>
          <DataTimeContainer>
            <div>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hour}
                label={t("enrollments.time")}
                onChange={(e) => setHour(e.target.value)}
              >
                {availableHours.map((hour) => (
                  <MenuItem key={hour.value} value={hour.value}>
                    {hour.label}
                  </MenuItem>
                ))}
              </StyledSelect>
            </div>
            <DateInputContainer>
              <InputLabel id=""> {t("enrollments.date")}</InputLabel>
              <DateInput
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText={t("enrollments.select")}
                filterDate={filterPastDates}
              />
            </DateInputContainer>
            <TextField
              value={phone}
              onChange={handlePhoneChange}
              label={t("enrollments.phone")}
              variant="outlined"
              InputProps={{
                inputProps: {
                  pattern: "[0-9]*",
                },
              }}
            />
          </DataTimeContainer>
          <Btn type="button" disabled={!formCompleted} onClick={handleEnroll}>
            {isEdited ? t("enrollments.update") : t("enrollments.enroll")}
          </Btn>
        </Form>
      </FormContainer>
    </Backdrop>
  );
};

export default EnrollmentForm;
