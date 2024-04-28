import styled from "styled-components";
import { hugeDesktop, smallDesktop, tablet } from "../../../utils/viewpoints";

const Container = styled.div`
  display: none;
  ${tablet} {
    display: block;
    padding: 64px 0;
  }
  .react-multi-carousel-track {
    gap: 20px;
  }
`;
const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
const CenterImg = styled.img`
  border-radius: 24px;
  height: 550px;
  ${hugeDesktop} {
    height: 100%;
  }
`;
const SideWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  height: 550px;
  justify-content: space-between;
  img {
    border-radius: 24px;
    width: calc(100%);
  }
  ${hugeDesktop} {
    height: 100%;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  font-weight: 400;
  font-size: 44px;
  line-height: 0.85;
  letter-spacing: -0.015em;
  margin-bottom: 44px;
  text-align: center;
  ${smallDesktop} {
    font-size: 56px;
  }
`;

export { Container, Wrap, SideWrap, CenterImg, Title };
