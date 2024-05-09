import { MdOutlinePostAdd } from "react-icons/md";
import { lightBlack } from "../../../utils/colors";
import { Btn, Container } from "./AddEnrolment.styled";
import { useState } from "react";
import EnrollmentForm from "../EnrollmentForm/EnrollmentForm";
import { useTranslation } from "react-i18next";

const AddEnrolment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Btn onClick={() => setIsOpen(true)} type="button">
          <MdOutlinePostAdd color={lightBlack} size={25} />
          {t("enrollments.enroll")}
        </Btn>
      </Container>
      {isOpen && <EnrollmentForm onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default AddEnrolment;
