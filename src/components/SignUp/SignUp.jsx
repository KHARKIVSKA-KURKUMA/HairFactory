import { TextField } from "@mui/material";
import {
  Container,
  Form,
  InputWrapper,
  SubmitButton,
  SignUpWrap,
  Title,
  Decr,
  SignInWrap,
  SignInLink,
  SignInDecr,
} from "./SignUp.styled";
import { useState } from "react";
import { HomeLink } from "../SignIn/SignIn.styled";
import { IoHome } from "react-icons/io5";
import { lightRed } from "../../utils/colors";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authThunks";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUsername("");
    dispatch(
      register({
        username,
        email,
        password,
      })
    );
  };
  const isValid =
    Boolean(passwordError) !== true &&
    Boolean(error) !== true &&
    Boolean(userNameError) !== true &&
    email !== "" &&
    password !== "" &&
    username !== "";
  /* -------------------------------------------------------------------------- */
  const handleEmailChange = (e) => {
    const newEmail = e.currentTarget.value;
    setEmail(newEmail);
    if (newEmail === "" || emailRegExp.test(newEmail)) {
      setError("");
    } else {
      setError(t("signUp.emailError"));
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.currentTarget.value;
    setPassword(newPassword);
    if (newPassword === "" || newPassword.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError(t("signUp.passError"));
    }
  };
  const handleUserNameChange = (e) => {
    const newUserName = e.currentTarget.value;
    setUsername(newUserName);
    if (newUserName === "" || newUserName.length >= 3) {
      setUserNameError("");
    } else {
      setUserNameError(t("signUp.nameError"));
    }
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      <SignUpWrap>
        <HomeLink to="/">
          <IoHome size={30} color={lightRed} />
        </HomeLink>
        <Title>{t("signUp.title")}</Title>
        <Decr>{t("signUp.descr")}</Decr>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextField
              id="Username"
              label={t("signUp.name")}
              variant="outlined"
              type="text"
              value={username}
              onChange={handleUserNameChange}
              error={!!userNameError}
              helperText={userNameError}
              required
            />
            <TextField
              id="Email"
              label={t("signUp.email")}
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
              required
            />
            <TextField
              id="Password"
              label={t("signUp.pass")}
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              required
            />
          </InputWrapper>
          <SubmitButton disabled={!isValid} type="submit">
            {t("signUp.btn")}
          </SubmitButton>
        </Form>
        <SignInWrap>
          <SignInDecr>{t("signUp.ifAuth")}</SignInDecr>
          <SignInLink to="/login">{t("signUp.signIn")}</SignInLink>
        </SignInWrap>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;
