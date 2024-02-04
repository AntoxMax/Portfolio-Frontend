import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateMainpageIngo } from "../../../../redux/MainPage/thunks";
import { TextAboutMeTypes } from "../../../../redux/MainPage/types";
import { useImageUploader } from "../../../../hooks/useUploadImg";

import { Button } from "../../../../ui/button/Button";
import { ButtonUploadImg } from "../../../../components/ButtonUploadImg/ButtonUploadImg";

import s from "../../style.module.scss";
import { Buttons } from "../Buttons/Buttons";

type AboutMeProps = {
  data: TextAboutMeTypes;
};

export const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  const { imageUrl, setImageUrl, handleChangeFile } = useImageUploader(
    data.imageUrl
  );
  const [textareaValue, setTextareaValue] = useState(data.text);
  const dispatch = useAppDispatch();

  const onClickSaveData = async () => {
    const textAboutMe = {
      text: textareaValue,
      imageUrl: imageUrl,
    };
    dispatch(updateMainpageIngo({ textAboutMe }));
    window.alert("Данные обновлены");
  };

  const onClickCancelSave = () => {
    setImageUrl(data.imageUrl);
    setTextareaValue(data.text);
  };

  return (
    <div>
      <textarea
        rows={5}
        name="awesome"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <div className={s.imageUrl}>
        <ButtonUploadImg handleChangeFile={handleChangeFile} />
        <img src={imageUrl} alt="" />
      </div>
      <Buttons
        onClickSaveData={onClickSaveData}
        onClickCancelSave={onClickCancelSave}
      />
    </div>
  );
};
