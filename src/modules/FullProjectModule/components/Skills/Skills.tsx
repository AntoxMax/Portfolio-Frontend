import React from "react";

import s from "../../fullProject.module.scss";
import Skills from "../../../../components/Skills/Skills";

type SkillsProps = {
  skills: string[];
};

export const SkillsBlock: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className={s.skills}>
      <Skills skills={[{ title: "Стэк:", skills: skills }]} />
    </div>
  );
};
