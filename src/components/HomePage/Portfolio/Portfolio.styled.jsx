import styled from "styled-components";
import { desktop, smallDesktop, tablet } from "../../../utils/viewpoints";

const Container = styled.div`
  display: none;
  ${tablet} {
    display: block;
    padding: 64px 0;
  }
`;
const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
const CenterImg = styled.img`
  border-radius: 24px;
  max-width: 245px;
  height: 296px;
  ${smallDesktop} {
    max-width: 350px;
    height: 446px;
  }
  ${desktop} {
    width: 398px;
  }
`;
const SideWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  img {
    border-radius: 24px;
    width: 245px;
    height: 140px;
    ${smallDesktop} {
      width: 350px;
      height: 215px;
    }
    ${desktop} {
      width: 370px;
    }
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
