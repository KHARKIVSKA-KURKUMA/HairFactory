import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AuthBtn,
  CallBtn,
  CloseButton,
  EnrollInfoHeader,
  LangItem,
  LangList,
  Link,
  List,
  MenuContainer,
  MenuMobile,
  Nav,
  Item,
} from "./HeaderMobile.styled";

const HeaderMobile = ({ onClose }) => {
  return (
    <MenuMobile>
      <MenuContainer>
        <CloseButton type="button" onClick={onClose}>
          <IoCloseCircleOutline size={30} color="#4e4e4e" />
        </CloseButton>
        <LangList>
          <LangItem>
            <Link>EN</Link>
          </LangItem>
          <Item>
            <Link>UA</Link>
          </Item>
        </LangList>
        <Nav>
          <List>
            <Item>
              <Link href="#1">Services</Link>
            </Item>
            <Item>
              <Link href="#2">Portfolio</Link>
            </Item>
            <Item>
              <Link href="#3">Reviews</Link>
            </Item>
            <Item>
              <Link href="#4">Stock</Link>
            </Item>
            <Item>
              <Link href="#5">Contacts</Link>
            </Item>
          </List>
        </Nav>
        <EnrollInfoHeader>
          <CallBtn href="tel:+380961111111">Call</CallBtn>
          <AuthBtn type="button">Sign up</AuthBtn>
        </EnrollInfoHeader>
      </MenuContainer>
    </MenuMobile>
  );
};

export default HeaderMobile;
