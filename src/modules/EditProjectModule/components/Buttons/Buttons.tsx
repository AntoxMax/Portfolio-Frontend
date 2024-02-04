import React from "react";
import { Button } from "../../../../ui/button/Button";

type ButtonsProps = {
  onClickEditProject: () => Promise<void>;
  onClickCancel: () => void;
};

export const Buttons: React.FC<ButtonsProps> = ({
  onClickEditProject,
  onClickCancel,
}) => {
  return (
    <div className="buttons">
      <Button onClick={() => onClickEditProject()} background={true}>
        Создать
      </Button>
      <Button onClick={() => onClickCancel()} background={true}>
        Отменить
      </Button>
    </div>
  );
};
