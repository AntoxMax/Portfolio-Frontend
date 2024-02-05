import VerticalLayout from "../../../../layouts/VerticalLayout";
import { BlockTitle } from "../../../../ui/blockTitle/BlockTitle";

import { TextAboutMeTypes } from "../../../../redux/MainPage/types";

import s from "./style.module.scss";

type AboutMeProps = {
  data: TextAboutMeTypes;
};

export const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <div id="aboutme">
      <VerticalLayout>
        <BlockTitle>Обо мне</BlockTitle>
        <div className={s.about}>
          <div className={s.about__photo}>
            <img src={data.imageUrl} alt="me" />
          </div>
          <div className={s.about__text}>{data.text}</div>
        </div>
      </VerticalLayout>
    </div>
  );
};
