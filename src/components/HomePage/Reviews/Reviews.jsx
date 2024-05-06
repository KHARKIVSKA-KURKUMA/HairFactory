import UserPic1 from "../../../img/review/userpic.png";
import UserPic2 from "../../../img/review/userpic2.png";
import UserPic3 from "../../../img/review/userpic3.png";
import UserPic4 from "../../../img/review/userpic4.png";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../utils/carouselResponsives";
import {
  Wrap,
  Container,
  Text,
  Title,
  ServiceType,
  Name,
  UserPic,
  About,
} from "./Reviews.styled";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("home.review.title")}</Title>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="all .5"
        transitionDuration={500}
        renderDotsOutside={true}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Wrap>
          <UserPic src={UserPic1} />
          <About>
            <ServiceType type={"coloring"}>
              {t("home.review.coloring")}
            </ServiceType>
            <Name>Khenia S.</Name>
            <Text>{t("home.review.rew1")}</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic2} />
          <About>
            <ServiceType type={"extension"}>
              {t("home.review.extension")}
            </ServiceType>
            <Name>Maria M.</Name>
            <Text>{t("home.review.rew2")}</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic3} />
          <About>
            <ServiceType type={"coloring"}>
              {t("home.review.coloring")}
            </ServiceType>
            <Name>Khenia B.</Name>
            <Text>{t("home.review.rew3")}</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic4} />
          <About>
            <ServiceType type={"extension"}>
              {t("home.review.extension")}
            </ServiceType>
            <Name>Maria B.</Name>
            <Text>{t("home.review.rew4")}</Text>
          </About>
        </Wrap>
      </Carousel>
    </Container>
  );
};

export default Reviews;
