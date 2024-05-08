import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { StyleSheetManager } from "styled-components";
import MasterPage from "./pages/MasterPage";

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isDesktop"}>
        <GlobalStyle />
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/HairFactory/"}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/master" element={<MasterPage />} />
              {/* <Route path="/client" element={<MasterPage />} /> */}
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

export default App;
