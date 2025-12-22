import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./contexts/language/provider.tsx";
import ParallaxProvider from "./contexts/parallax/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </LanguageProvider>
  </StrictMode>
);
