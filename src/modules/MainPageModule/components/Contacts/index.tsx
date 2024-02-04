import VerticalLayout from "../../../../layouts/VerticalLayout";
import { BlockTitle } from "../../../../ui/blockTitle/BlockTitle";
import { Button } from "../../../../ui/button/Button";

import { ContactTypes } from "../../../../redux/MainPage/types";

import s from "./style.module.scss";
import { ContactsList } from "./ContactsList";

type ContactsProps = {
  contacts: ContactTypes[];
};

export const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <VerticalLayout>
      <BlockTitle>Контакты</BlockTitle>
      <div className={s.contacts}>
        <ContactsList contacts={contacts} />
        <div className={s.contacts__button}>
          <p>Мое полное портфолио</p>
          <Button color="white">Портфолио</Button>
        </div>
      </div>
    </VerticalLayout>
  );
};
