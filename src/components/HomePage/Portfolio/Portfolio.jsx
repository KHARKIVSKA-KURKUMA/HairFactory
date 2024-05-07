import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import Portfolio1 from "../../../img/portfolio/portfolio-1.jpg";
import Portfolio2 from "../../../img/portfolio/portfolio-2.jpg";
import Portfolio3 from "../../../img/portfolio/portfolio-3.jpg";
import Portfolio4 from "../../../img/portfolio/portfolio-4.webp";
import Portfolio5 from "../../../img/portfolio/portfolio-5.jpg";
import Portfolio6 from "../../../img/portfolio/portfolio-6.jpg";
import Portfolio7 from "../../../img/portfolio/portfolio-7.jpg";
import Portfolio8 from "../../../img/portfolio/portfolio-8.jpg";
import PortfolioC1 from "../../../img/portfolio/portfolio-center.jpg";
import PortfolioC2 from "../../../img/portfolio/portfolio-center-2.jpg";
import PortfolioC3 from "../../../img/portfolio/portfolio-center-3.jpg";
import PortfolioC4 from "../../../img/portfolio/portfolio-center-4.jpg";
import { Container, SideWrap, CenterImg, Title } from "./Portfolio.styled";
import { responsive } from "../../../utils/carouselResponsives";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Container id="portfolio">
      <Title>{t("home.portfolio.title")}</Title>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        renderDotsOutside={true}
      >
        <SideWrap>
          <img src={Portfolio1} alt="Portfolio1" loading="lazy" />
          <img src={Portfolio2} alt="Portfolio2" loading="lazy" />
        </SideWrap>
        <CenterImg src={PortfolioC1} alt="Portfolio" loading="lazy" />
        <SideWrap>
          <img src={Portfolio3} alt="Portfolio3" loading="lazy" />
          <img src={Portfolio4} alt="Portfolio4" loading="lazy" />
        </SideWrap>
        <CenterImg src={PortfolioC2} alt="Portfolio" loading="lazy" />
        <SideWrap>
          <img src={Portfolio5} alt="Portfolio5" loading="lazy" />
          <img src={Portfolio6} alt="Portfolio6" loading="lazy" />
        </SideWrap>
        <CenterImg src={PortfolioC3} alt="Portfolio" loading="lazy" />
        <SideWrap>
          <img src={Portfolio7} alt="Portfolio7" loading="lazy" />
          <img src={Portfolio8} alt="Portfolio8" loading="lazy" />
        </SideWrap>
        <CenterImg src={PortfolioC4} alt="Portfolio" loading="lazy" />
      </Carousel>
    </Container>
  );
};

export default Portfolio;
