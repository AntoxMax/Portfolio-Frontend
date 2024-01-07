import React from "react";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import VerticalLayout from "../../layouts/VerticalLayout";
import { Button } from "../../ui/button/Button";
import { MailIcon } from "../../ui/icons/MailIcon";
import { TelegramIcon } from "../../ui/icons/TelegramIcon";
import { GitHubIcon } from "../../ui/icons/GitHubIcon";

import s from "./style.module.scss";

export const Contacts = () => {
  return (
    <VerticalLayout>
      <BlockTitle>Контакты</BlockTitle>
      <div className={s.contacts}>
        <div className={s.contacts__socials}>
          <div className={s.socials__item}>
            {<MailIcon />} maksimkin.antoxa@gmail.com
          </div>
          <div className={s.socials__item}>
            {<TelegramIcon />} +81 80 3731 1245
          </div>
          <div className={s.socials__item}>{<GitHubIcon />} my git</div>
        </div>
        <div className={s.contacts__button}>
          <p>Мое полное портфолио</p>
          <Button color="white">Портфолио</Button>
        </div>
      </div>
    </VerticalLayout>
  );
};
