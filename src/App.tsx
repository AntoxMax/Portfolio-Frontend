import React from "react";
import "./App.css";
import { Main } from "./pages/Main";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullProject } from "./pages/FullProject";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";
import { AdminBar } from "./pages/AdminBar";
import { Projects } from "./components/Projects";
import { AdminMaininfo } from "./components/AdminMainInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-bar/*" element={<AdminBar />}>
          <Route path="" element={<AdminMaininfo />} />
          <Route path="projects" element={<p>Projects</p>} />
          <Route path="users" element={<p>Users</p>} />
        </Route>
        <Route path="projects/:id" element={<FullProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
