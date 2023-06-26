import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/Context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
  // document.getElementById("root")
);
