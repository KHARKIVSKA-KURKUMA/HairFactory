import StarR from "../../../img/svg/heroStarR.svg";
import StarL from "../../../img/svg/heroStarL.svg";
import HeroPic from "../../../img/heroPic.png";
import {
  Container,
  HeroWrap,
  StarLeft,
  StarRight,
  Title,
  MoreBtn,
  Description,
  Picture,
  PictureHolder,
} from "./Hero.styled";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StarRight src={StarR} alt="Star" />
      <StarLeft src={StarL} alt="Star" />
      <PictureHolder>
        <Picture src={HeroPic} alt="Girl" />
      </PictureHolder>
      <HeroWrap>
        <Title>{t("home.hero.title")}</Title>
        <Description>{t("home.hero.descr")}</Description>
        <MoreBtn href="#stock">{t("home.hero.button")}</MoreBtn>
      </HeroWrap>
    </Container>
  );
};

export default Hero;
