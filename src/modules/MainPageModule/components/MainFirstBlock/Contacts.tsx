import { ContactTypes } from "../../../../redux/MainPage/types";

import s from "./style.module.scss";

type ContactsProps = {
  contacts: ContactTypes[];
};

export const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className={s.content__socials}>
      {contacts.map((contact: ContactTypes, index: number) => (
        <a key={index} href={contact.urlContact}>
          <img
            src={contact.iconUrl}
            alt={contact.textContact}
            className={s.socials__item}
          />
        </a>
      ))}
    </div>
  );
};
