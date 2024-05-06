import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AuthBtn,
  CallBtn,
  CloseButton,
  EnrollInfoHeader,
  LinkS,
  List,
  MenuContainer,
  MenuMobile,
  Nav,
  Item,
} from "./HeaderMobile.styled";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

const HeaderMobile = ({ onClose, isDesktop }) => {
  const { t } = useTranslation();
  return (
    <MenuMobile>
      <MenuContainer>
        <CloseButton type="button" onClick={onClose}>
          <IoCloseCircleOutline size={30} color="#4e4e4e" />
        </CloseButton>
        <LangSwitcher isDesktop={isDesktop} />
        <Nav>
          <List onClick={onClose}>
            <Item>
              <LinkS href="#service">
                {t("home.header.headerList.services")}
              </LinkS>
            </Item>
            <Item>
              <LinkS href="#portfolio">
                {t("home.header.headerList.portfolio")}
              </LinkS>
            </Item>
            <Item>
              <LinkS href="#reviews">
                {t("home.header.headerList.reviews")}
              </LinkS>
            </Item>
            <Item>
              <LinkS href="#stock">{t("home.header.headerList.stock")}</LinkS>
            </Item>
            <Item>
              <LinkS href="#contacts">
                {t("home.header.headerList.contacts")}
              </LinkS>
            </Item>
          </List>
        </Nav>
        <EnrollInfoHeader>
          <CallBtn href="tel:+380961111111">{t("home.header.callBtn")}</CallBtn>
          <AuthBtn to="/login" type="button">
            {t("home.header.authBtn")}
          </AuthBtn>
        </EnrollInfoHeader>
      </MenuContainer>
    </MenuMobile>
  );
};

export default HeaderMobile;
