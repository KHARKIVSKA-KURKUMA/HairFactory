import { desktop, phone } from "../../../utils/viewpoints";
import { lightBlack, lightGreenC, mapOpacity } from "../../../utils/colors";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 0 64px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${desktop} {
    padding: 44px 0 64px;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  font-size: 52px;
  font-weight: 400;
  line-height: 0.85;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 42px;
  ${desktop} {
    font-size: 72px;
  }
`;
const Wrap = styled.div``;
const Address = styled.address`
  margin-left: 10px;
`;
const Desk = styled.p`
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 4px;
`;
const Details = styled.p`
  font-weight: 700;
  line-height: 1.4;
  font-size: 18px;
  margin-bottom: 16px;
  display: flex;
  gap: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${phone} {
    font-size: 20px;
  }
`;
const Link = styled.a`
  font-weight: 700;
  line-height: 1.4;
  font-size: 18px;
  margin-bottom: 16px;
  color: ${lightBlack};
  display: flex;
  gap: 5px;
  ${phone} {
    font-size: 20px;
  }
`;
const SocialList = styled.ul`
  display: flex;
  margin-top: 32px;
  gap: 8px;
  justify-content: center;
  ${desktop} {
    justify-content: flex-start;
  }
`;
const SocialItem = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid ${lightBlack};
  border-radius: 50%;
  justify-content: center;
`;
const SocialLink = styled.a``;
const MapWrap = styled.div`
  margin: 0px 5px;
  border-radius: 72px;
  background-color: ${mapOpacity};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${lightGreenC};
  ${desktop} {
    width: 610px;
  }
`;
const Map = styled.iframe`
  width: 100%;
  border-radius: 72px;
`;

export {
  Container,
  Title,
  Wrap,
  MapWrap,
  Map,
  SocialItem,
  SocialLink,
  SocialList,
  Desk,
  Details,
  Link,
  Address,
};
