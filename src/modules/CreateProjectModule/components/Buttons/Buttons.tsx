import React from "react";
import { Button } from "../../../../ui/button/Button";

type ButtonsProps = {
  onClickCreateProject: () => Promise<void>;
  onClickCancel: () => void;
};

export const Buttons: React.FC<ButtonsProps> = ({
  onClickCreateProject,
  onClickCancel,
}) => {
  return (
    <div className="buttons">
      <Button onClick={() => onClickCreateProject()} background={true}>
        Создать
      </Button>
      <Button onClick={() => onClickCancel()} background={true}>
        Отменить
      </Button>
    </div>
  );
};
