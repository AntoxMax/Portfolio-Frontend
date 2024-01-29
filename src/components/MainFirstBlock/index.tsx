import s from "./style.module.scss";
import VerticalLayout from "../../layouts/VerticalLayout";
import { Button } from "../../ui/button/Button";

export const MainFirstBlock = ({ firstBLock, contacts }: any) => {
  return (
    <>
      <VerticalLayout>
        <div className="root">
          <div className={s.mainBlock}>
            <div className={s.mainBlock__content}>
              <div className={s.content__menu}>
                <div className={s.menu__item}>Навыки</div>
                <div className={s.menu__item}>Обо мне</div>
                <div className={s.menu__item}>Проекты</div>
                <div className={s.menu__item}>Контакты</div>
              </div>
              <div className={s.content__name}>{firstBLock.title1}</div>
              <div className={s.content__job}>{firstBLock.title2}</div>
              <div className={s.content__socials}>
                {contacts.map((contact: any) => (
                  <a href={contact.urlContact}>
                    <img
                      src={contact.iconUrl}
                      alt={contact.textContact}
                      className={s.socials__item}
                    />
                  </a>
                ))}
              </div>
              <div className={s.content__button}>
                <Button>Портфолио</Button>
              </div>
            </div>
            <div className={s.mainBlock__photo}>
              <img src={firstBLock.imageUrl} alt="me" />
            </div>
          </div>
        </div>
      </VerticalLayout>
    </>
  );
};
