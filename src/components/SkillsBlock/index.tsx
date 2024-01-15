//@ts-nocheck

import { useEffect } from "react";
import VerticalLayout from "../../layouts/VerticalLayout";
import {
  fetchMainpageIngo,
  skillsType,
} from "../../redux/MainPage/mainpageSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import s from "./style.module.scss";
import Skills from "../Skills/Skills";

export const SkillsBLock = () => {
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.mainPage.mainPageIngo.skills);

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, []);

  return (
    <VerticalLayout>
      <BlockTitle>Навыки</BlockTitle>
      <div className={s.skills}>
        {skills.length !== 0 && <Skills objectSkills={skills[0]} />}
      </div>
    </VerticalLayout>
  );
};
