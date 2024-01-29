//@ts-nocheck

import React, { useEffect, useRef } from "react";
import axios from "../../axios";
import { Button } from "../../ui/button/Button";
import { updateMainpageIngo } from "../../redux/MainPage/mainpageSlice";
import { useAppDispatch } from "../../redux/hooks";

export const AboutMe = ({ data }: any) => {
  const [imageUrl, setimageUrl] = React.useState(data.imageUrl);
  const [textareaValue, setTextareaValue] = React.useState(data.text);
  const dispatch = useAppDispatch();

  const inputFileRef = useRef(null);

  const handleChangeFile = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setimageUrl(data.url);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSaveData = async () => {
    const textAboutMe = {
      text: textareaValue,
      imageUrl: imageUrl,
    };
    dispatch(updateMainpageIngo({ textAboutMe }));
    window.alert("Данные обновлены");
  };

  const onclickCancelSave = () => {
    setimageUrl(data.imageUrl);
    setInputValue(data.title1);
    setInputValue2(data.title2);
  };

  return (
    <div>
      <textarea
        rows={5}
        name="awesome"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <div className="imageUrl">
        <Button
          background={true}
          onClick={() => inputFileRef.current.click()}
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
        <img src={imageUrl} alt="" />
      </div>
      <div className="buttons">
        <Button background={true} onClick={() => onClickSaveData()}>
          Сохранить
        </Button>
        <Button background={true} onClick={() => onclickCancelSave()}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
