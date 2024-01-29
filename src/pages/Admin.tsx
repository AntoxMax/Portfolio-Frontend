import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { SubmitHandler, useForm } from "react-hook-form";

import s from "./admin.module.scss";
import { Button } from "../ui/button/Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAdminLogin } from "../redux/Admin/adminSlice";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

interface InputTypes {
  login: string;
  password: string;
}

export const Admin = () => {
  const isAuth = useAppSelector((state) => state.admin.auth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  if (isAuth) {
    return <Navigate to="/admin-bar" />;
  }

  const onSubmit: SubmitHandler<InputTypes> = async (data) => {
    const user = await dispatch(fetchAdminLogin(data));

    if (!user.payload) {
      return alert("Error");
    }

    if ("token" in user.payload) {
      window.localStorage.setItem("token", user.payload.token);
    } else {
      console.log("err");
    }
  };

  return (
    <MainLayout>
      <div className={s.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="login"
            {...register("login", { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {Object.keys(errors).length !== 0 && <span>Error</span>}

          <Button background={true}>Войти</Button>
        </form>
        <Link to="/">
          <Button background={true} icon={true}>
            На главную
          </Button>{" "}
        </Link>
      </div>
    </MainLayout>
  );
};
