import Ksenia from "../../../img/ksenia.jpg";
import Natasha from "../../../img/natasha.jpg";
import Violeta from "../../../img/violeta.jpg";
import Carousel from "react-multi-carousel";
import {
  Container,
  Title,
  Descr,
  Description,
  Wrap,
  AboutWrap,
  Name,
  Image,
} from "./Team.styled";
import { useTranslation } from "react-i18next";
import { responsive } from "../../../utils/carouselResponsives";

const Team = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("home.team.title")}</Title>
      <Description>{t("home.team.descr")}</Description>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        customTransition="all .5"
        transitionDuration={500}
        renderDotsOutside={true}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <a href="#link" className="item">
          <Wrap>
            <Image src={Ksenia} alt="Team" />
            <AboutWrap>
              <Name>{t("home.team.ksenia")}</Name>
              <Descr>{t("home.team.profecion")}</Descr>
            </AboutWrap>
          </Wrap>
        </a>

        <a href="#link" className="item">
          <Wrap>
            <Image src={Natasha} alt="Team" />
            <AboutWrap>
              <Name>{t("home.team.natasha")}</Name>
              <Descr>{t("home.team.profecion")}</Descr>
            </AboutWrap>
          </Wrap>
        </a>

        <a href="#link" className="item">
          <Wrap>
            <Image src={Violeta} alt="Team" />
            <AboutWrap>
              <Name>{t("home.team.violetta")}</Name>
              <Descr>{t("home.team.profecion")}</Descr>
            </AboutWrap>
          </Wrap>
        </a>
      </Carousel>
    </Container>
  );
};

export default Team;
