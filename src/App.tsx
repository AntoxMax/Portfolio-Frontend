import React, { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchAuthAdmin, isAuthSelector } from "./redux/Admin/adminSlice";
import { AdminProjects } from "./components/AdminProjects";
import { AddProject } from "./pages/AddProject";
import { EditProject } from "./pages/EditProject";
import { AdminUser } from "./components/AdminUser";

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    dispatch(fetchAuthAdmin());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-bar/" element={<AdminBar />}>
          <Route index element={<AdminMaininfo />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="edit-project/:id" element={<EditProject />} />
          <Route path="users" element={<AdminUser />} />
        </Route>
        <Route path="projects/:id" element={<FullProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
