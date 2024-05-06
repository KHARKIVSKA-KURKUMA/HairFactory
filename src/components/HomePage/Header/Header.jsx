import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../../img/svg/logo.svg";
import {
  AuthBtn,
  CallBtn,
  Container,
  EnrollInfoHeader,
  HeaderNavWrap,
  LinkS,
  LogoWrap,
  MenuOpenButton,
  Nav,
  NavItem,
  NavList,
  StyledPhone,
} from "./Header.styled";
import { useState } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <LogoWrap>
          <img src={Logo} alt="Logo" />
        </LogoWrap>
        {isDesktop ? (
          <>
            <LangSwitcher isDesktop={isDesktop} />
            <HeaderNavWrap>
              <Nav>
                <NavList>
                  <NavItem>
                    <LinkS href="#service">
                      {t("home.header.headerList.services")}
                    </LinkS>
                  </NavItem>
                  <NavItem>
                    <LinkS href="#portfolio">
                      {t("home.header.headerList.portfolio")}
                    </LinkS>
                  </NavItem>
                  <NavItem>
                    <LinkS href="#reviews">
                      {t("home.header.headerList.reviews")}
                    </LinkS>
                  </NavItem>
                  <NavItem>
                    <LinkS href="#stock">
                      {t("home.header.headerList.stock")}
                    </LinkS>
                  </NavItem>
                  <NavItem>
                    <LinkS href="#contacts">
                      {t("home.header.headerList.contacts")}
                    </LinkS>
                  </NavItem>
                </NavList>
              </Nav>
              <EnrollInfoHeader>
                <LinkS href="tel:+380961111111">
                  <StyledPhone />
                  +38 096 111 11 11
                </LinkS>
                <CallBtn href="tel:+380961111111">
                  {t("home.header.callBtn")}
                </CallBtn>
                <AuthBtn to="/login">{t("home.header.authBtn")}</AuthBtn>
              </EnrollInfoHeader>
            </HeaderNavWrap>
          </>
        ) : (
          <MenuOpenButton type="button" onClick={() => setIsOpen(true)}>
            <CiMenuBurger size={30} color="#4e4e4e" />
          </MenuOpenButton>
        )}
      </Container>
      {isOpen && !isDesktop && (
        <HeaderMobile onClose={() => setIsOpen(false)} isDesktop={isDesktop} />
      )}
    </>
  );
};

export default Header;
