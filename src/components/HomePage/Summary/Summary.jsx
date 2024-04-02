import { useTranslation } from "react-i18next";
import {
  Container,
  Desk,
  Number,
  Item,
  ItemWrap,
  List,
} from "./Summary.styled";

const Summary = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <List>
        <Item>
          <ItemWrap>
            <Number>90%</Number>
            <Desk>{t("home.summary.customer")}</Desk>
          </ItemWrap>
        </Item>
        <Item>
          <ItemWrap>
            <Number>1000</Number>
            <Desk>{t("home.summary.feedback")}</Desk>
          </ItemWrap>
        </Item>
        <Item>
          <ItemWrap>
            <Number>10 000</Number>
            <Desk>{t("home.summary.client")}</Desk>
          </ItemWrap>
        </Item>
        <Item>
          <ItemWrap>
            <Number>30</Number>
            <Desk>{t("home.summary.server")}</Desk>
          </ItemWrap>
        </Item>
      </List>
    </Container>
  );
};

export default Summary;
