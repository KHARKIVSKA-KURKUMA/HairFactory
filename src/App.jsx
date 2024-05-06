import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/HairFactory/"}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
