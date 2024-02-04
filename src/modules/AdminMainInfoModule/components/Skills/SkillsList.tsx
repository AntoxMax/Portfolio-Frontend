import React from "react";

import s from "../../style.module.scss";
import { DeleteIcon } from "../../../../ui/icons/DeleteIcon";
import { Input } from "../../../../ui/Input";
import { AddItemIcon } from "../../../../ui/icons/AddItemIcon";
import { skillsType } from "../../../../redux/MainPage/types";

type SkillListProps = {
  skill: skillsType;
  index: number;
  items: skillsType[];
  setItems: React.Dispatch<React.SetStateAction<skillsType[]>>;
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SkillsList: React.FC<SkillListProps> = ({
  skill,
  index,

  items,
  setItems,
  inputs,
  setInputs,
}) => {
  const handleChangeInputs = (value: any, index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const addSkill = (index: number) => {
    if (!inputs[index]) return;
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      ["skills"]: [...updatedItems[index].skills, inputs[index]],
    };
    setItems(updatedItems);
    handleChangeInputs("", index);
  };

  const deleteSkill = (index: number, skillIndex: number) => {
    const updatedItems = [...items];
    const newSkills = [...updatedItems[index].skills];
    newSkills.splice(Number(skillIndex), 1);
    updatedItems[index] = {
      ...updatedItems[index],
      ["skills"]: newSkills,
    };
    setItems(updatedItems);
  };

  return (
    <div className={s.skills__items}>
      {skill.skills.map((item: any, skillIndex: number) => (
        <div key={skillIndex} className={s.item}>
          {item}
          <DeleteIcon onClick={() => deleteSkill(index, skillIndex)} />
        </div>
      ))}
      <div>
        <Input
          type="text"
          placeholder="Добавить"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && addSkill(index)
          }
          icon={
            <AddItemIcon
              opacity={!inputs[index] ? "50%" : ""}
              onClick={() => addSkill(index)}
            />
          }
          value={inputs[index]}
          style={{ marginBottom: 0 + "px" }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeInputs(e.target.value, index)
          }
        />
      </div>
    </div>
  );
};
