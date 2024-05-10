import Logo from "../../../img/svg/logo.svg";
import { CiLogout } from "react-icons/ci";
import { Container, LogOut, LogoWrap } from "./Header.styled";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/auth/authThunks";
import { useState } from "react";
import CloseDialog from "../CloseDialog/CloseDialog";
import LangSwitcher from "../../HomePage/LangSwitcher/LangSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [openModal, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <LogoWrap to={"/"}>
        <img src={Logo} alt="Logo" />
      </LogoWrap>
      <LangSwitcher />
      <LogOut onClick={() => setOpen(true)}>
        <CiLogout size={20} /> {t("enrollments.logout")}
      </LogOut>
      <CloseDialog
        open={openModal}
        onClose={handleCloseModal}
        handleLogout={handleLogout}
      />
    </Container>
  );
};

export default Header;
