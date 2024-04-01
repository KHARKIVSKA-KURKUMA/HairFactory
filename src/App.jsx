import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/HairFactory/"}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            {/* <Route path="/another" element={<AboutPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
