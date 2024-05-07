import Logo from "../../../img/svg/logo.svg";
import { CiLogout } from "react-icons/ci";
import { Container, LogOut, LogoWrap } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <LogoWrap>
        <img src={Logo} alt="Logo" />
      </LogoWrap>
      <LogOut>
        <CiLogout size={20} /> Logout
      </LogOut>
    </Container>
  );
};

export default Header;
