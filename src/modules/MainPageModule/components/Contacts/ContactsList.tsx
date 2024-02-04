import React from "react";
import { ContactTypes } from "../../../../redux/MainPage/types";

import s from "./style.module.scss";

type ContactsProps = {
  contacts: ContactTypes[];
};

export const ContactsList: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className={s.contacts__socials}>
      {contacts.map((contact: ContactTypes, index: number) => (
        <a key={index} href={contact.urlContact} className={s.socials__item}>
          <img src={contact.iconUrl} alt={contact.textContact} />
          {contact.textContact}
        </a>
      ))}
    </div>
  );
};
