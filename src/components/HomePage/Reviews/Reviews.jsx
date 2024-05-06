import UserPic1 from "../../../img/userpic.png";
import UserPic2 from "../../../img/userpic2.png";
import UserPic3 from "../../../img/userpic3.png";
import UserPic4 from "../../../img/userpic4.png";
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

const Reviews = () => {
  return (
    <Container>
      <Title>What they say about our work</Title>
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
            <ServiceType type={"coloring"}>Coloring</ServiceType>
            <Name>Khenia S.</Name>
            <Text>Girls are so smart, I love you so much!</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic2} />
          <About>
            <ServiceType type={"extension"}>Extension</ServiceType>
            <Name>Maria M.</Name>
            <Text>For the first time I was so pleased with the service</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic3} />
          <About>
            <ServiceType type={"coloring"}>Coloring</ServiceType>
            <Name>Khenia B.</Name>
            <Text>I became like a fairy</Text>
          </About>
        </Wrap>
        <Wrap>
          <UserPic src={UserPic4} />
          <About>
            <ServiceType type={"extension"}>Extension</ServiceType>
            <Name>Maria B.</Name>
            <Text>My hair is now shiny!</Text>
          </About>
        </Wrap>
      </Carousel>
    </Container>
  );
};

export default Reviews;
