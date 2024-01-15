import React from "react";
import MainLayout from "../layouts/MainLayout";
import VerticalLayout from "../layouts/VerticalLayout";

import s from "./adminBar.module.scss";
import { Link, Outlet } from "react-router-dom";

export const AdminBar = () => {
  return (
    <MainLayout>
      <VerticalLayout>
        <div className={s.adminMenu}>
          <Link to="/admin-bar">
            <div className={s.adminMenu__item}>MainPage</div>
          </Link>
          <Link to="/admin-bar/projects">
            <div className={s.adminMenu__item}>Projects</div>
          </Link>
          <Link to="/admin-bar/users">
            <div className={s.adminMenu__item}>Users</div>
          </Link>
        </div>
      </VerticalLayout>
      <Outlet />
    </MainLayout>
  );
};
