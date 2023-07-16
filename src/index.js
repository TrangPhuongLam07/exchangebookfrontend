import ReactDOM from "react-dom/client";
import React from "react";
import config from "./config";
import App from "./App";
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
