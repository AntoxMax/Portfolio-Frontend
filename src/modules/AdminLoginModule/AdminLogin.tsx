import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import s from "./admin.module.scss";
import { Form } from "./components/Form/Form";
import { GoOnBack } from "../../components/GoOnBack/GoOnBack";
import { fetchAuthAdmin } from "../../redux/Admin/thunks";
import { Statuses } from "../../redux/common-types";
import { Loader } from "../../components/Loader/Loader";

export const AdminLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const { auth, status } = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAuthAdmin());
  }, [dispatch]);

  if (auth) {
    return <Navigate to="/admin-bar" />;
  }

  return (
    <>
      {status === Statuses.Success ? (
        <MainLayout>
          <div className={s.form}>
            <Form />
            <GoOnBack />
          </div>
        </MainLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};
