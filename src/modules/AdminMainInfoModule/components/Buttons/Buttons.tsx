import React from "react";
import { Button } from "../../../../ui/button/Button";

import s from "../../style.module.scss";

type ButtonsProps = {
  onClickSaveData: () => Promise<void>;
  onClickCancelSave: () => void;
};

export const Buttons: React.FC<ButtonsProps> = ({
  onClickSaveData,
  onClickCancelSave,
}) => {
  return (
    <div className={s.buttons}>
      <Button background={true} onClick={() => onClickSaveData()}>
        Сохранить
      </Button>
      <Button background={true} onClick={() => onClickCancelSave()}>
        Отменить
      </Button>
    </div>
  );
};
