import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/hooks";
import { fetchAdminLogin } from "../../../../redux/Admin/thunks";

import { Button } from "../../../../ui/button/Button";
import { ErrorMessage } from "../Error/Error";

interface InputTypes {
  login: string;
  password: string;
}

export const Form: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

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
      {Object.keys(errors).length !== 0 && <ErrorMessage />}

      <Button type="submit" background={true}>
        Войти
      </Button>
    </form>
  );
};
