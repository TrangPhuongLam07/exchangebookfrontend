import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { theme } from "./config/theme";
import { ThemeProvider } from "@mui/material";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={config.theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
