import React, { useEffect } from "react";
import VerticalLayout from "../../layouts/VerticalLayout";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";

import s from "./style.module.scss";
import photo from "../../assets/img/about-me.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMainpageIngo } from "../../redux/MainPage/mainpageSlice";

export const AboutMe = () => {
  const dispatch = useAppDispatch();
  const textAboutMe = useAppSelector(
    (state) => state.mainPage.mainPageIngo.textAboutMe
  );

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, []);

  return (
    <VerticalLayout>
      <BlockTitle>Обо мне</BlockTitle>
      <div className={s.about}>
        <div className={s.about__photo}>
          <img src={photo} alt="me" />
        </div>
        <div className={s.about__text}>{textAboutMe}</div>
      </div>
    </VerticalLayout>
  );
};
