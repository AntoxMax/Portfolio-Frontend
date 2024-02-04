import s from "./style.module.scss";

export const Menu = () => {
  return (
    <div className={s.content__menu}>
      <div className={s.menu__item}>Навыки</div>
      <div className={s.menu__item}>Обо мне</div>
      <div className={s.menu__item}>Проекты</div>
      <div className={s.menu__item}>Контакты</div>
    </div>
  );
};
