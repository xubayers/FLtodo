import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { PhonesProvider } from "./contexts/PhonesContext";
import Details from "./components/Details";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PhonesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<Details />} path="/details/:id" />
        </Routes>
      </BrowserRouter>
    </PhonesProvider>
  </StrictMode>
);
