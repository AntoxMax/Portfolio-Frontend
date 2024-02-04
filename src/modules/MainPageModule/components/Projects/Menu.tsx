import React, { Dispatch, SetStateAction, useState } from "react";

import { projectCategories } from "../../../../redux/common-types";

import s from "./style.module.scss";

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<projectCategories>>;
};

export const Menu: React.FC<Props> = ({ category, setCategory }) => {
  //TODO: сделать добавление класса active к эелементам меню по индексам, useState инициализировать начальным индексом
  const [active, setActive] = useState<number>(1);
  return (
    <div className={s.projects__menu}>
      <div
        className={s.menu__item}
        onClick={() => setCategory(projectCategories.Pet)}
      >
        ПЭТ-проекты
      </div>
      <div
        className={s.menu__item}
        onClick={() => setCategory(projectCategories.Frilans)}
      >
        Фриланс
      </div>
      <div
        className={s.menu__item}
        onClick={() => setCategory(projectCategories.Commercial)}
      >
        Коммерческий опыт
      </div>
    </div>
  );
};
