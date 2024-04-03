import styled from "styled-components";

const Container = styled.div`
  padding: 64px 0;
`;
const Wrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
const CenterImg = styled.img`
  max-width: 398px;
  max-height: 446px;
  border-radius: 24px;
`;
const SideWrap = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  img {
    max-width: 370px;
    max-height: 215px;
    border-radius: 24px;
  }
`;
const Title = styled.h2`
  font-family: "Oranienbaum";
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 64px;
  font-weight: 400;
  font-size: 72px;
  line-height: 0%.85;
`;

export { Container, Wrap, SideWrap, CenterImg, Title };
