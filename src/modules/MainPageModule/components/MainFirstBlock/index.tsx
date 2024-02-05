import VerticalLayout from "../../../../layouts/VerticalLayout";
import { Button } from "../../../../ui/button/Button";
import { Menu } from "./Menu";
import { Contacts } from "./Contacts";

import {
  ContactTypes,
  FirstBlockTypes,
} from "../../../../redux/MainPage/types";

import s from "./style.module.scss";

type MainFirstProps = {
  firstBlock: FirstBlockTypes;
  contacts: ContactTypes[];
};

export const MainFirstBlock: React.FC<MainFirstProps> = ({
  firstBlock,
  contacts,
}) => {
  return (
    <div id="first">
      <VerticalLayout>
        <div className="root">
          <div className={s.mainBlock}>
            <div className={s.mainBlock__content}>
              <Menu />
              <div className={s.content__name}>{firstBlock.title1}</div>
              <div className={s.content__job}>{firstBlock.title2}</div>
              <Contacts contacts={contacts} />
              <div className={s.content__button}>
                <Button>Портфолио</Button>
              </div>
            </div>
            <div className={s.mainBlock__photo}>
              <img src={firstBlock.imageUrl} alt="me" />
            </div>
          </div>
        </div>
      </VerticalLayout>
    </div>
  );
};
