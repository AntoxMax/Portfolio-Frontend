import React from "react";
import backgroundImg from "../../assets/img/backgroung-img-2.png";

import s from "./style.module.scss";

export const Background = () => {
  return (
    <div className={s.background}>
      {/* TODO:  Сделать фоновую подложку */}
      <img src={backgroundImg} alt="me" />
    </div>
  );
};
