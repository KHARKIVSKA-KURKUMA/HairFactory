import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../../img/svg/logo.svg";
import {
  AuthBtn,
  CallBtn,
  Container,
  EnrollInfoHeader,
  HeaderNavWrap,
  Link,
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
  const isDesktop = useMediaQuery("(min-width: 1080px)");
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
                    <Link>{t("home.header.headerList.services")}</Link>
                  </NavItem>
                  <NavItem>
                    <Link href="#2">
                      {t("home.header.headerList.portfolio")}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="#3">{t("home.header.headerList.reviews")}</Link>
                  </NavItem>
                  <NavItem>
                    <Link href="#4">{t("home.header.headerList.stock")}</Link>
                  </NavItem>
                  <NavItem>
                    <Link href="#5">
                      {t("home.header.headerList.contacts")}
                    </Link>
                  </NavItem>
                </NavList>
              </Nav>
              <EnrollInfoHeader>
                <Link href="tel:+380961111111">
                  <StyledPhone />
                  +38 096 111 11 11
                </Link>
                <CallBtn href="tel:+380961111111">
                  {t("home.header.callBtn")}
                </CallBtn>
                <AuthBtn type="button">{t("home.header.authBtn")}</AuthBtn>
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
