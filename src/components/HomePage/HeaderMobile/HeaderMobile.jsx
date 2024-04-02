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
          <List>
            <Item>
              <Link>{t("home.header.headerList.services")}</Link>
            </Item>
            <Item>
              <Link href="#2">{t("home.header.headerList.portfolio")}</Link>
            </Item>
            <Item>
              <Link href="#3">{t("home.header.headerList.reviews")}</Link>
            </Item>
            <Item>
              <Link href="#4">{t("home.header.headerList.stock")}</Link>
            </Item>
            <Item>
              <Link href="#5">{t("home.header.headerList.contacts")}</Link>
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
