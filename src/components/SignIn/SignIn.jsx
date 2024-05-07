import { TextField } from "@mui/material";
import {
  Container,
  Form,
  InputWrapper,
  SubmitButton,
  SignInWrap,
  Title,
  Decr,
  SignUpWrap,
  SignUpLink,
  SignUpDecr,
  HomeLink,
} from "./SignIn.styled";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { lightRed } from "../../utils/colors";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const { t } = useTranslation();
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  const isValid =
    Boolean(passwordError) !== true &&
    Boolean(error) !== true &&
    email !== "" &&
    password !== "";
  /* -------------------------------------------------------------------------- */
  const handleEmailChange = (e) => {
    const newEmail = e.currentTarget.value;
    setEmail(newEmail);
    if (newEmail === "" || emailRegExp.test(newEmail)) {
      setError("");
    } else {
      setError(t("signIn.emailError"));
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.currentTarget.value;
    setPassword(newPassword);
    if (newPassword === "" || newPassword.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError(t("signIn.passError"));
    }
  };
  /* -------------------------------------------------------------------------- */
  return (
    <Container>
      <SignInWrap>
        <HomeLink to="/">
          <IoHome size={30} color={lightRed} />
        </HomeLink>
        <Title>{t("signIn.title")}</Title>
        <Decr>{t("signIn.descr")}</Decr>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextField
              id="UserMail"
              label={t("signIn.email")}
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={!!error}
              helperText={error}
              required
            />
            <TextField
              id="UserPassword"
              label={t("signIn.pass")}
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
            {t("signIn.btn")}
          </SubmitButton>
        </Form>
        <SignUpWrap>
          <SignUpDecr> {t("signIn.ifNoAuth")}</SignUpDecr>
          <SignUpLink to="/registration">{t("signIn.signUp")}</SignUpLink>
        </SignUpWrap>
      </SignInWrap>
    </Container>
  );
};

export default SignIn;
