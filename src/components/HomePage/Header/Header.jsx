import { CiMenuBurger } from "react-icons/ci";
import Logo from "../../../img/svg/logo.svg";
import {
  AuthBtn,
  CallBtn,
  Container,
  EnrollInfoHeader,
  HeaderNavWrap,
  Item,
  Link,
  List,
  LogoWrap,
  MenuOpenButton,
  Nav,
  NavItem,
  NavList,
  StyledPhone,
} from "./Header.styled";
import { useState } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <LogoWrap>
          <img src={Logo} alt="Logo" />
        </LogoWrap>
        <List>
          <Item>
            <Link>EN</Link>
          </Item>
          <Item>
            <Link>UA</Link>
          </Item>
        </List>
        <HeaderNavWrap>
          <Nav>
            <NavList>
              <NavItem>
                <Link href="#1">Services</Link>
              </NavItem>
              <NavItem>
                <Link href="#2">Portfolio</Link>
              </NavItem>
              <NavItem>
                <Link href="#3">Reviews</Link>
              </NavItem>
              <NavItem>
                <Link href="#4">Stock</Link>
              </NavItem>
              <NavItem>
                <Link href="#5">Contacts</Link>
              </NavItem>
            </NavList>
          </Nav>
          <EnrollInfoHeader>
            <Link href="tel:+380961111111">
              <StyledPhone />
              +38 096 111 11 11
            </Link>
            <CallBtn href="tel:+380961111111">Call</CallBtn>
            <AuthBtn type="button">Sign up</AuthBtn>
          </EnrollInfoHeader>
        </HeaderNavWrap>
        <MenuOpenButton type="button" onClick={() => setIsOpen(true)}>
          <CiMenuBurger size={30} color="#4e4e4e" />
        </MenuOpenButton>
      </Container>
      {isOpen && <HeaderMobile onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
