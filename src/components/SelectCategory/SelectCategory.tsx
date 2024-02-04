import React from "react";
import { projectCategories } from "../../redux/common-types";

import s from "./style.module.scss";

type SelectProps = {
  setCategory: React.Dispatch<React.SetStateAction<projectCategories>>;
};

export const SelectCategory: React.FC<SelectProps> = ({ setCategory }) => {
  return (
    <label>
      Выберите категорию:
      <select
        className={s.select}
        name="selectCategory"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value as projectCategories)
        }
      >
        <option value={projectCategories.NoCategory}>
          {projectCategories.NoCategory}
        </option>
        <option value={projectCategories.Pet}>{projectCategories.Pet}</option>
        <option value={projectCategories.Frilans}>
          {projectCategories.Frilans}
        </option>
        <option value={projectCategories.Commercial}>
          {projectCategories.Commercial}
        </option>
      </select>
    </label>
  );
};
