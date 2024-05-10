import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { StyleSheetManager } from "styled-components";
import Restricted from "./components/Routes/Restricted";
import Private from "./components/Routes/Private";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import MasterPage from "./pages/MasterPage";
import ClientPage from "./pages/ClientPage";
import AuthPage from "./pages/AuthPage";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./store/auth/authThunks";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={2500} theme="colored" />
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isDesktop"}>
        <GlobalStyle />
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/HairFactory/"}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route
                path="login"
                element={<Restricted component={LoginPage} to="/auth" />}
              />
              <Route
                path="registration"
                element={<Restricted component={RegistrationPage} to="/auth" />}
              />
              <Route
                path="auth"
                element={<Private component={AuthPage} to="/login" />}
              />
              <Route
                path="master"
                element={<Private component={MasterPage} to="/login" />}
              />
              <Route
                path="client"
                element={<Private component={ClientPage} to="/login" />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

export default App;
