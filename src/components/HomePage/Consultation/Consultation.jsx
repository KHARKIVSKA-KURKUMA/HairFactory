import TextField from "@mui/material/TextField";
import Pictures from "../../../img/consultation.jpg";
import StarR from "../../../img/svg/heroStarR.svg";
import {
  Container,
  Wrap,
  Img,
  Title,
  Descr,
  Btn,
  Star,
  Form,
} from "./Consultation.styled";
import { useTranslation } from "react-i18next";

const Consultation = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Img src={Pictures} />
      <Wrap>
        <Title>{t("home.consultation.title")}</Title>
        <Descr> {t("home.consultation.descr")}</Descr>
        <Star src={StarR} />
        <Form>
          <TextField label={t("home.consultation.name")} variant="outlined" />
          <TextField label={t("home.consultation.phone")} variant="outlined" />
          <TextField
            id="outlined-multiline-static"
            label={t("home.consultation.field")}
            multiline
            rows={4}
          />
          <Btn type="submit">{t("home.consultation.btn")}</Btn>
        </Form>
      </Wrap>
    </Container>
  );
};

export default Consultation;
