import React from "react";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import VerticalLayout from "../../layouts/VerticalLayout";
import { Button } from "../../ui/button/Button";
import { MailIcon } from "../../ui/icons/MailIcon";
import { TelegramIcon } from "../../ui/icons/TelegramIcon";
import { GitHubIcon } from "../../ui/icons/GitHubIcon";

import s from "./style.module.scss";

export const Contacts = ({ contacts }: any) => {
  return (
    <VerticalLayout>
      <BlockTitle>Контакты</BlockTitle>
      <div className={s.contacts}>
        <div className={s.contacts__socials}>
          {contacts.map((contact: any) => (
            <a href={contact.urlContact} className={s.socials__item}>
              <img src={contact.iconUrl} alt={contact.textContact} />
              {contact.textContact}
            </a>
          ))}
        </div>
        <div className={s.contacts__button}>
          <p>Мое полное портфолио</p>
          <Button color="white">Портфолио</Button>
        </div>
      </div>
    </VerticalLayout>
  );
};
