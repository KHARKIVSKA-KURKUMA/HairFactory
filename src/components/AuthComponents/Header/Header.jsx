import Logo from "../../../img/svg/logo.svg";
import { CiLogout } from "react-icons/ci";
import { Container, LogOut, LogoWrap } from "./Header.styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/auth/authThunks";

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <LogoWrap>
        <img src={Logo} alt="Logo" />
      </LogoWrap>
      <LogOut onClick={handleLogout}>
        <CiLogout size={20} /> {t("enrollments.logout")}
      </LogOut>
    </Container>
  );
};

export default Header;
