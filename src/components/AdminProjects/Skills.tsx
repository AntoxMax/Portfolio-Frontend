//@ts-nocheck
import React, { useState } from "react";
import { Input } from "../../ui/Input";
import { AddItemIcon } from "../../ui/icons/AddItemIcon";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";

export const Skills = ({ skills, setSkills }) => {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (!input) return;
    const updatedSkills = [...skills, input];
    setSkills(updatedSkills);
    setInput("");
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(Number(index), 1);
    setSkills(updatedSkills);
  };
  return (
    <div className="itemSkills">
      {skills.length !== 0 &&
        skills.map((item, index) => (
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
        onChange={(e: any) => setInput(e.target.value)}
      />
    </div>
  );
};
