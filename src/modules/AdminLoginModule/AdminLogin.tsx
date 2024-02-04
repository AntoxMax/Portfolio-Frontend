import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import s from "./admin.module.scss";
import { Form } from "./components/Form/Form";
import { GoOnMain } from "../../components/GoOnMain/GoOnMain";
import { fetchAuthAdmin } from "../../redux/Admin/thunks";

export const AdminLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.admin.auth);

  useEffect(() => {
    dispatch(fetchAuthAdmin());
  }, [dispatch]);

  if (isAuth) {
    return <Navigate to="/admin-bar" />;
  }

  return (
    <MainLayout>
      <div className={s.form}>
        <Form />
        <GoOnMain />
      </div>
    </MainLayout>
  );
};
