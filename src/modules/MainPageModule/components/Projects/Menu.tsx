import React, { Dispatch, SetStateAction, useState } from "react";

import { projectCategories } from "../../../../redux/common-types";

import s from "./style.module.scss";

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<projectCategories>>;
};

export const Menu: React.FC<Props> = ({ category, setCategory }) => {
  const [active, setActive] = useState<number>(1);

  const onClickMenuItem = (
    projectCategories: projectCategories,
    index: number
  ) => {
    setCategory(projectCategories);
    setActive(index);
  };

  return (
    <div className={s.projects__menu}>
      <div
        className={s.menu__item + " " + (active === 1 ? s.active : "")}
        onClick={() => onClickMenuItem(projectCategories.Pet, 1)}
      >
        ПЭТ-проекты
      </div>
      <div
        className={s.menu__item + " " + (active === 2 ? s.active : "")}
        onClick={() => onClickMenuItem(projectCategories.Frilans, 2)}
      >
        Фриланс
      </div>
      <div
        className={s.menu__item + " " + (active === 3 ? s.active : "")}
        onClick={() => onClickMenuItem(projectCategories.Commercial, 3)}
      >
        Коммерческий опыт
      </div>
    </div>
  );
};
