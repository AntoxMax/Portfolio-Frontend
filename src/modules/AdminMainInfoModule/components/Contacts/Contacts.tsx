import React, { useState, useRef } from "react";
import { ContactTypes } from "../../../../redux/MainPage/types";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateMainpageIngo } from "../../../../redux/MainPage/thunks";
import axios from "../../../../services/axios";

import { ContactsElement } from "./Contact";
import { Button } from "../../../../ui/button/Button";
import { Buttons } from "../Buttons/Buttons";

type ContactsProps = {
  data: ContactTypes[];
};

const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const inputFileRefs = useRef<HTMLInputElement[] | null>([]);

  const handleChange = (index: number, key: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [key]: value };
    setItems(updatedItems);
  };

  const removeProperty = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChangeFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: string
  ) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (!e.target.files) return;
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
          key={index}
          item={item}
          index={index}
          removeProperty={removeProperty}
          inputFileRefs={inputFileRefs}
          handleChangeFile={handleChangeFile}
          handleChange={handleChange}
        />
      ))}
      <Button onClick={addElement}>Добавить контакт</Button>
      <Buttons
        onClickSaveData={onClickSaveData}
        onClickCancelSave={onClickCancelSave}
      />
    </div>
  );
};

export { Contacts };
