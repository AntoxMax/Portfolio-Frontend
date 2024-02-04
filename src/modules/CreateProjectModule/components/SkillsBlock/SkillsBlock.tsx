import React from "react";
import { AccordionItem } from "../../../../ui/Accordion/AccordionItem";
import { Skills } from "../../../../components/AdminSkills/AdminSkills";

import s from "../../addProject.module.scss";

type SkillsProps = {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

export const SkillsBlock: React.FC<SkillsProps> = ({ skills, setSkills }) => {
  return (
    <div className={s.skills__block}>
      <AccordionItem
        title={"Skills"}
        content={<Skills skills={skills} setSkills={setSkills} />}
      />
    </div>
  );
};
