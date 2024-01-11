import { useEffect } from "react";
import VerticalLayout from "../../layouts/VerticalLayout";
import { fetchMainpageIngo } from "../../redux/MainPage/mainpageSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import s from "./style.module.scss";

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
        <div className={s.skills__block}>
          <div className={s.skills__text}>Frontend:</div>
          <div className={s.skills__items}>
            <div className={s.skills__item}>React</div>
            <div className={s.skills__item}>Redux</div>
            <div className={s.skills__item}>Css</div>
            <div className={s.skills__item}>HTML</div>
          </div>
          <div className={s.skills__text}>Другое:</div>
          <div className={s.skills__items}>
            <div className={s.skills__item}>Wordpress</div>
            <div className={s.skills__item}>Node</div>
            <div className={s.skills__item}>Express</div>
            <div className={s.skills__item}>Figma</div>
          </div>
        </div>
      </div>
    </VerticalLayout>
  );
};
