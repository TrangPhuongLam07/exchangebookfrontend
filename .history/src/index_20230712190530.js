import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import { theme } from "./config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
