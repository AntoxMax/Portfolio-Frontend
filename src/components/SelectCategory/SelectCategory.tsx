import React from "react";
import { projectCategories } from "../../redux/common-types";

type SelectProps = {
  setCategory: React.Dispatch<React.SetStateAction<projectCategories>>;
};

export const SelectCategory: React.FC<SelectProps> = ({ setCategory }) => {
  return (
    <label>
      Выберите категорию:
      <select
        name="selectCategory"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value as projectCategories)
        }
      >
        <option value={projectCategories.NoCategory}>Без категории</option>
        <option value={projectCategories.Pet}>PET</option>
        <option value={projectCategories.Frilans}>Frilans</option>
        <option value={projectCategories.Commercial}>Commers</option>
      </select>
    </label>
  );
};
