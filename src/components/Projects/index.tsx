import VerticalLayout from "../../layouts/VerticalLayout";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import s from "./style.module.scss";

import projectImg from "../../assets/img/Rectangle 1.png";

export const Projects = () => {
  return (
    <VerticalLayout>
      <BlockTitle>Проекты</BlockTitle>
      <div className={s.projects}>
        <div className={s.projects__menu}>
          <div className={s.menu__item}>ПЭТ-проекты</div>
          <div className={s.menu__item}>Фриланс</div>
          <div className={s.menu__item}>Коммерческий опыт</div>
        </div>
        <div className={s.projects__items}>
          <div className={s.projects__item}>
            <img src={projectImg} />
            <p className={s.title}>Разработка портфолио для себя</p>
          </div>
          <div className={s.projects__item}>
            <img src={projectImg} />
            <div className={s.title}>Разработка портфолио для себя</div>
          </div>
          <div className={s.projects__item}>
            <img src={projectImg} />
            <div className={s.title}>Разработка портфолио для себя</div>
          </div>
        </div>
      </div>
    </VerticalLayout>
  );
};
