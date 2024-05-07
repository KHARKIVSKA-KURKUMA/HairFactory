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

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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
      setError("Invalid e-mail format");
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.currentTarget.value;
    setPassword(newPassword);
    if (newPassword === "" || newPassword.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 6 characters long");
    }
  };
  /* -------------------------------------------------------------------------- */
  return (
    <Container>
      <SignInWrap>
        <HomeLink to="/">
          <IoHome size={30} color={lightRed} />
        </HomeLink>
        <Title>Login</Title>
        <Decr>Hey, enter your details to get sign in to your account</Decr>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextField
              id="UserMail"
              label="Email"
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
              label="Password"
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
            Sign In
          </SubmitButton>
        </Form>
        <SignUpWrap>
          <SignUpDecr> Don't have an account?</SignUpDecr>
          <SignUpLink to="/registration">Sign Up</SignUpLink>
        </SignUpWrap>
      </SignInWrap>
    </Container>
  );
};

export default SignIn;
