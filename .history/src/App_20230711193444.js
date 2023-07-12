// import PostBookPage from "./pages/PostBookPage";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "~/pages/home";
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
