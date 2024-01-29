//@ts-nocheck

import React, { useEffect, useRef } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "../../ui/button/Button";
import axios from "../../axios";
import { Input } from "../../ui/Input";
import { updateMainpageIngo } from "../../redux/MainPage/mainpageSlice";

export const FirstBlock = ({ data, setData }: any) => {
  const dispatch = useAppDispatch();

  const [imageUrl, setimageUrl] = React.useState(data.imageUrl);
  const [inputValue, setInputValue] = React.useState(data.title1);
  const [inputValue2, setInputValue2] = React.useState(data.title2);
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

  const onClickSaveData = async (e) => {
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
    setimageUrl(data.imageUrl);
    setInputValue(data.title1);
    setInputValue2(data.title2);
  };

  return (
    <div className="firstBlock">
      <Input
        value={inputValue}
        setValue={setInputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Input
        value={inputValue2}
        setValue={setInputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
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
        <Button background={true} onClick={(e) => onClickSaveData(e)}>
          Сохранить
        </Button>
        <Button background={true} onClick={() => onclickCancelSave()}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
