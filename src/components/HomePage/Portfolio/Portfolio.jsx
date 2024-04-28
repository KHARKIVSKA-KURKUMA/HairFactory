import { Carousel } from "react-responsive-carousel";
import Portfolio1 from "../../../img/portfolio-1.jpg";
import Portfolio2 from "../../../img/portfolio-2.jpg";
import Portfolio3 from "../../../img/portfolio-3.jpg";
import Portfolio4 from "../../../img/portfolio-4.webp";
import Portfolio5 from "../../../img/portfolio-5.jpg";
import Portfolio6 from "../../../img/portfolio-6.jpg";
import Portfolio7 from "../../../img/portfolio-7.jpg";
import Portfolio8 from "../../../img/portfolio-8.jpg";
import PortfolioC1 from "../../../img/portfolio-center.jpg";
import PortfolioC2 from "../../../img/portfolio-center1.jpg";
import {
  Container,
  Wrap,
  SideWrap,
  CenterImg,
  Title,
} from "./Portfolio.styled";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("home.portfolio.title")}</Title>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
        emulateTouch={true}
        showIndicators={false}
        interval={5000}
      >
        <Wrap>
          <SideWrap>
            <img src={Portfolio1} alt="Portfolio1" />
            <img src={Portfolio2} alt="Portfolio2" />
          </SideWrap>
          <CenterImg src={PortfolioC1} alt="Portfolio" />
          <SideWrap>
            <img src={Portfolio3} alt="Portfolio3" />
            <img src={Portfolio4} alt="Portfolio4" />
          </SideWrap>
        </Wrap>
        <Wrap>
          <SideWrap>
            <img src={Portfolio5} alt="Portfolio5" />
            <img src={Portfolio6} alt="Portfolio6" />
          </SideWrap>
          <CenterImg src={PortfolioC2} alt="Portfolio" />
          <SideWrap>
            <img src={Portfolio7} alt="Portfolio7" />
            <img src={Portfolio8} alt="Portfolio8" />
          </SideWrap>
        </Wrap>
      </Carousel>
    </Container>
  );
};

export default Portfolio;
