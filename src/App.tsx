import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/theme-context";
import ActiveSectionContextProvider from "./context/active-section-context";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Home />} />
            <Route path="/privacy" element={<Home />} />
          </Routes>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
