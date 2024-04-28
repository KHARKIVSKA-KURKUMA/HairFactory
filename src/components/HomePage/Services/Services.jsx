import { useTranslation } from "react-i18next";
import Services1 from "../../../img/services-1.jpg";
import Services2 from "../../../img/services-2.webp";
import Services3 from "../../../img/services-3.jpg";
import Services4 from "../../../img/services-4.jpg";
import ServicesC1 from "../../../img/services-center.jpg";
import {
  Desc,
  Title,
  Wrap,
  CenterImg,
  Container,
  SideWrap,
} from "./Services.styled";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("home.services.title")}</Title>
      <Desc>{t("home.services.descr")}</Desc>
      <Wrap>
        <SideWrap>
          <img src={Services1} alt="Services1" />
          <img src={Services2} alt="Services2" />
        </SideWrap>
        <CenterImg src={ServicesC1} alt="Services" />
        <SideWrap>
          <img src={Services3} alt="Services3" />
          <img src={Services4} alt="Services4" />
        </SideWrap>
      </Wrap>
    </Container>
  );
};

export default Services;
