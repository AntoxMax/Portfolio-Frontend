import React from "react";
import VerticalLayout from "../../layouts/VerticalLayout";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";

import s from "./style.module.scss";
import photo from "../../assets/img/about-me.png";

export const AboutMe = () => {
  return (
    <VerticalLayout>
      <BlockTitle>Обо мне</BlockTitle>
      <div className={s.about}>
        <div className={s.about__photo}>
          <img src={photo} alt="me" />
        </div>
        <div className={s.about__text}>
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLor emLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLore oremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLore oremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLore oremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLore oremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLore oremLoremLorem
          oremLoremLoremLoremLoremLoremLoremLoremLoremLorem remLoremLoremLo
          remLoremLoremLoremLoremLoremLoremLoremLoremLoremL emLoremLoremLor
        </div>
      </div>
    </VerticalLayout>
  );
};
