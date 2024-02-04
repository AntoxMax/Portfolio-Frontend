import React from "react";
import { skillsType } from "../../../../redux/MainPage/types";

import s from "../../style.module.scss";
import { Input } from "../../../../ui/Input";
import { DeleteIcon } from "../../../../ui/icons/DeleteIcon";
import { SkillsList } from "./SkillsList";

type SkillBlock = {
  items: skillsType[];
  setItems: React.Dispatch<React.SetStateAction<skillsType[]>>;
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SkillsBlock: React.FC<SkillBlock> = ({
  items,
  setItems,
  inputs,
  setInputs,
}) => {
  const handleChange = (index: number, key: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [key]: value };
    setItems(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((skill: skillsType, index: number) => (
        <div key={index} className={s.skills}>
          <div className={s.skills__title}>{skill.title}</div>
          <div className={s.skills__header}>
            <Input
              type="text"
              placeholder="Название контакта"
              value={skill.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(index, "title", e.target.value)
              }
            />
          </div>
          <div className={s.skills__delete}>
            <DeleteIcon onClick={() => removeItem(index)} />
          </div>

          <SkillsList
            skill={skill}
            index={index}
            items={items}
            setItems={setItems}
            inputs={inputs}
            setInputs={setInputs}
          />
        </div>
      ))}
    </div>
  );
};
