import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import MenuContextProvider from "./contexts/MenuContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </StrictMode>,
);
