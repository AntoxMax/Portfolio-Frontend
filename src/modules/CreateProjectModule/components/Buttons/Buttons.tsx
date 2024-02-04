import React from "react";
import { Button } from "../../../../ui/button/Button";

import s from "../../addProject.module.scss";

type ButtonsProps = {
  onClickCreateProject: () => Promise<void>;
  onClickCancel: () => void;
};

export const Buttons: React.FC<ButtonsProps> = ({
  onClickCreateProject,
  onClickCancel,
}) => {
  return (
    <div className={s.buttons}>
      <Button onClick={() => onClickCreateProject()} background={true}>
        Создать
      </Button>
      <Button onClick={() => onClickCancel()} background={true}>
        Отменить
      </Button>
    </div>
  );
};
