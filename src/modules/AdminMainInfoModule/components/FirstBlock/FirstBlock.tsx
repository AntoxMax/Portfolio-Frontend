import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateMainpageIngo } from "../../../../redux/MainPage/thunks";
import { FirstBlockTypes } from "../../../../redux/MainPage/types";
import { useImageUploader } from "../../../../hooks/useUploadImg";

import { Input } from "../../../../ui/Input";
import { Button } from "../../../../ui/button/Button";
import { ButtonUploadImg } from "../../../../components/ButtonUploadImg/ButtonUploadImg";

type FirstBlockProps = {
  data: FirstBlockTypes;
};

export const FirstBlock: React.FC<FirstBlockProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const { imageUrl, setImageUrl, handleChangeFile } = useImageUploader(
    data.imageUrl
  );
  const [inputValue, setInputValue] = useState(data.title1);
  const [inputValue2, setInputValue2] = useState(data.title2);

  const onClickSaveData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const firstBlock = {
      title1: inputValue,
      title2: inputValue2,
      imageUrl: imageUrl,
    };

    dispatch(updateMainpageIngo({ firstBlock }));
    window.alert("Данные обновлены");
  };

  const onclickCancelSave = () => {
    setImageUrl(data.imageUrl);
    setInputValue(data.title1);
    setInputValue2(data.title2);
  };

  return (
    <div className="firstBlock">
      <Input
        value={inputValue}
        setValue={setInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <Input
        value={inputValue2}
        setValue={setInputValue2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue2(e.target.value)
        }
      />
      <div className="imageUrl">
        <ButtonUploadImg handleChangeFile={handleChangeFile} />
        <img src={imageUrl} alt="" />
      </div>
      <div className="buttons">
        <Button
          background={true}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            onClickSaveData(e)
          }
        >
          Сохранить
        </Button>
        <Button background={true} onClick={() => onclickCancelSave()}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
