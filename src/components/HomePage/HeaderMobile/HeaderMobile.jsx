import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AuthBtn,
  CallBtn,
  CloseButton,
  EnrollInfoHeader,
  Link,
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
              <Link href="#service">
                {t("home.header.headerList.services")}
              </Link>
            </Item>
            <Item>
              <Link href="#portfolio">
                {t("home.header.headerList.portfolio")}
              </Link>
            </Item>
            <Item>
              <Link href="#reviews">{t("home.header.headerList.reviews")}</Link>
            </Item>
            <Item>
              <Link href="#stock">{t("home.header.headerList.stock")}</Link>
            </Item>
            <Item>
              <Link href="#contacts">
                {t("home.header.headerList.contacts")}
              </Link>
            </Item>
          </List>
        </Nav>
        <EnrollInfoHeader>
          <CallBtn href="tel:+380961111111">{t("home.header.callBtn")}</CallBtn>
          <AuthBtn type="button">{t("home.header.authBtn")}</AuthBtn>
        </EnrollInfoHeader>
      </MenuContainer>
    </MenuMobile>
  );
};

export default HeaderMobile;
