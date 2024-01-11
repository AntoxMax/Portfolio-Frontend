import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullProject } from "./pages/FullProject";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="projects/:id" element={<FullProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
