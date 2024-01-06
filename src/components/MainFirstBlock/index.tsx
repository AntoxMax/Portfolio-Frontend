import photoOfMe from "../../assets/img/first-block.png";
import s from "./style.module.scss";

import { MailIcon } from "../../ui/icons/MailIcon";
import { TelegramIcon } from "../../ui/icons/TelegramIcon";
import { GitHubIcon } from "../../ui/icons/GitHubIcon";
import VerticalLayout from "../../layouts/VerticalLayout";

import backgroundImg from "../../assets/img/backgroung-img-2.png";
import { Button } from "../../ui/button/Button";

export const MainFirstBlock = () => {
  return (
    <VerticalLayout>
      <div className="root">
        <div className={s.background}>
          {/* TODO:  Сделать фоновую подложку */}
          {/* <img src={backgroundImg} alt="me" /> */}
        </div>
        <div className={s.mainBlock}>
          <div className={s.mainBlock__content}>
            <div className={s.content__menu}>
              <div className={s.menu__item}>Навыки</div>
              <div className={s.menu__item}>Обо мне</div>
              <div className={s.menu__item}>Проекты</div>
              <div className={s.menu__item}>Контакты</div>
            </div>
            <div className={s.content__name}>Максимкин Антон</div>
            <div className={s.content__job}>React Frontend Developer</div>
            <div className={s.content__socials}>
              <div className={s.socials__item}>{<MailIcon />}</div>
              <div className={s.socials__item}>{<TelegramIcon />}</div>
              <div className={s.socials__item}>{<GitHubIcon />}</div>
            </div>
            <div className={s.content__button}>
              <Button>Портфолио</Button>
            </div>
          </div>
          <div className={s.mainBlock__photo}>
            <img src={photoOfMe} alt="me" />
          </div>
        </div>
      </div>
    </VerticalLayout>
  );
};
