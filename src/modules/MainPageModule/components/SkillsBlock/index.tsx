import VerticalLayout from "../../../../layouts/VerticalLayout";
import { BlockTitle } from "../../../../ui/blockTitle/BlockTitle";

import { skillsType } from "../../../../redux/MainPage/types";

import s from "./style.module.scss";
import Skills from "../../../../components/Skills/Skills";

type SkillsProps = {
  data: skillsType[];
};

export const SkillsBLock: React.FC<SkillsProps> = ({ data }) => {
  return (
    <VerticalLayout>
      <BlockTitle>Навыки</BlockTitle>
      <div className={s.skills}>{data && <Skills skills={data} />}</div>
    </VerticalLayout>
  );
};
