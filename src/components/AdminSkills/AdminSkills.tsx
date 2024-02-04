import React, { useState } from "react";
import { Input } from "../../ui/Input";
import { AddItemIcon } from "../../ui/icons/AddItemIcon";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";

type SkillsProps = {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Skills: React.FC<SkillsProps> = ({ skills, setSkills }) => {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (!input) return;
    const updatedSkills = [...skills, input];
    setSkills(updatedSkills);
    setInput("");
  };

  const deleteSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(Number(index), 1);
    setSkills(updatedSkills);
  };
  return (
    <div className="itemSkills">
      {skills.length !== 0 &&
        skills.map((item: string, index: number) => (
          <div className="item-skill">
            {item}
            <DeleteIcon onClick={() => deleteSkill(index)} />
          </div>
        ))}
      <Input
        type="text"
        placeholder="Добавить"
        icon={
          <AddItemIcon opacity={!input && "50%"} onClick={() => addSkill()} />
        }
        value={input}
        style={{ marginBottom: 0 + "px" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
    </div>
  );
};
