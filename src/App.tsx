import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
}

export default App;
