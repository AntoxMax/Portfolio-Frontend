import { Route, Routes } from "react-router-dom";

import { AddProject } from "./modules/CreateProjectModule/AddProject";
import { EditProject } from "./modules/EditProjectModule/EditProject";

import { Main } from "./modules/MainPageModule/Main";
import { FullProject } from "./modules/FullProjectModule/FullProject";
import { NotFound } from "./modules/NotFoundModule/NotFound";
import { AdminLogin } from "./modules/AdminLoginModule/AdminLogin";
import { AdminBar } from "./modules/AdminBarModule/AdminBar";
import { AdminMaininfo } from "./modules/AdminMainInfoModule/AdminMainInfo";
import { AdminProjects } from "./modules/AdminProjectsModule/AdminProjects";
import { AdminUser } from "./modules/AdminUserModule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminLogin />} />
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
