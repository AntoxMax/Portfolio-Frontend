import MainLayout from "../../layouts/MainLayout";
import s from "./style.module.scss";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <MainLayout>
        <div className={s.footer__items}>
          <div className={s.footer__item}>Начало</div>
          <div className={s.footer__item}>Навыки</div>
          <div className={s.footer__item}>Обо мне</div>
          <div className={s.footer__item}>Проекты</div>
        </div>
      </MainLayout>
    </div>
  );
};
