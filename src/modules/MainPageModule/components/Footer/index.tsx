import { Link } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

import s from "./style.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <MainLayout>
        <div className={s.footer__items}>
          <div className={s.footer__item}>
            <Link to="/#first">Начало</Link>
          </div>
          <div className={s.footer__item}>
            <Link to="/#skills">Навыки</Link>
          </div>
          <div className={s.footer__item}>
            <Link to="/#aboutme">Обо мне</Link>
          </div>
          <div className={s.footer__item}>
            <Link to="/#projects">Проекты</Link>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
