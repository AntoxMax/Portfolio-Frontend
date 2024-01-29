//@ts-nocheck

import React, { useState, useRef } from "react";
import { Button } from "../../ui/button/Button";
import axios from "../../axios";
import { ContactsElement } from "./ContactsElement";
import { useAppDispatch } from "../../redux/hooks";
import { updateMainpageIngo } from "../../redux/MainPage/mainpageSlice";

const Contacts = ({ data }) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const inputFileRefs = useRef([]);

  const handleChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [key]: value };
    setItems(updatedItems);
  };

  const removeProperty = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChangeFile = async (e, index, key) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      const updatedItems = [...items];
      updatedItems[index] = { ...updatedItems[index], [key]: data.url };
      setItems(updatedItems);
    } catch (err) {
      console.log(err);
    }
  };

  const addElement = () => {
    setItems([...items, { iconUrl: "", textContact: "", urlContact: "" }]);
  };

  const onClickSaveData = async () => {
    const contacts = items;
    dispatch(updateMainpageIngo({ contacts }));
    window.alert("Данные обновлены");
  };

  const onClickCancelSave = () => {
    setItems(data);
  };

  return (
    <div>
      {items.map((item, index) => (
        <ContactsElement
          item={item}
          index={index}
          removeProperty={removeProperty}
          inputFileRefs={inputFileRefs}
          handleChangeFile={handleChangeFile}
          handleChange={handleChange}
        />
      ))}
      <Button onClick={addElement}>Добавить контакт</Button>
      <div className="buttons">
        <Button background={true} onClick={() => onClickSaveData()}>
          Сохранить
        </Button>
        <Button background={true} onClick={() => onClickCancelSave()}>
          Отменить
        </Button>
      </div>
    </div>
  );
};

export { Contacts };
