import { Link } from "react-router-dom";
import s from "./style.module.scss";

export const Menu = () => {
  return (
    <div className={s.content__menu}>
      <div className={s.menu__item}>
        <Link to="/#skills">Навыки</Link>
      </div>
      <div className={s.menu__item}>
        <Link to="/#aboutme">Обо мне</Link>
      </div>
      <div className={s.menu__item}>
        <Link to="/#projects">Проекты</Link>
      </div>
      <div className={s.menu__item}>
        <Link to="/#contacts">Контакты</Link>
      </div>
    </div>
  );
};
