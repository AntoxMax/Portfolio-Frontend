import React, { useRef } from "react";
import { Button } from "../../ui/button/Button";

type ButtonProps = {
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const ButtonUploadImg: React.FC<ButtonProps> = ({
  handleChangeFile,
}) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Button
        background={true}
        onClick={() => inputFileRef.current && inputFileRef.current.click()}
        type="button"
      >
        Загрузить картинку
      </Button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
    </>
  );
};
