import { Link } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { Button } from "../../ui/button/Button";

import s from "./notFound.module.scss";

export const NotFound = () => {
  return (
    <MainLayout>
      <div className={s.notFound}>
        <h1 className="">404</h1>
        <p>Такой страницы не существует</p>
        <Link to="/">
          <Button background={true}>На главную</Button>
        </Link>
      </div>
    </MainLayout>
  );
};
