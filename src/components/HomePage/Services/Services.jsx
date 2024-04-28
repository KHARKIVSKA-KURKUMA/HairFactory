import { useTranslation } from "react-i18next";
import Services1 from "../../../img/services/services-1.jpg";
import Services2 from "../../../img/services/services-2.jpg";
import Services3 from "../../../img/services/services-3.jpg";
import Services4 from "../../../img/services/services-4.jpg";
import Services5 from "../../../img/services/services-5.jpg";
import { Desc, Title, Container } from "./Services.styled";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../utils/carouselResponsives";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("home.services.title")}</Title>
      <Desc>{t("home.services.descr")}</Desc>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <img src={Services1} alt="Services1" />
        <img src={Services2} alt="Services2" />
        <img src={Services3} alt="Services3" />
        <img src={Services4} alt="Services4" />
        <img src={Services5} alt="Services5" />
      </Carousel>
    </Container>
  );
};

export default Services;
