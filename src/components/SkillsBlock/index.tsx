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

export const SkillsBLock = ({ data }) => {
  return (
    <VerticalLayout>
      <BlockTitle>Навыки</BlockTitle>
      <div className={s.skills}>{data && <Skills skills={data} />}</div>
    </VerticalLayout>
  );
};
