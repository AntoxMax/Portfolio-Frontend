//@ts-nocheck
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMainpageIngo } from "../../redux/MainPage/mainpageSlice";

import { Button } from "../../ui/button/Button";
import axios from "../../axios";
import { Input } from "../../ui/Input";
import { EditIcon } from "../../ui/icons/EditIcon";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";
import { AddItemIcon } from "../../ui/icons/AddItemIcon";
import { updateMainpageIngo } from "../../redux/MainPage/mainpageSlice";

export const Skills = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const [skills, setSkills] = useState(data);
  const [inputs, setInputs] = useState(Array(data.length));

  const addElement = () => {
    setItems([...items, { title: "", skills: [] }]);
    setInputs([...inputs, ""]);
  };

  const handleChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [key]: value };
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChangeInputs = (value, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const onClickSaveData = async () => {
    setSkills(items);
    dispatch(updateMainpageIngo({ items }));
    window.alert("Данные обновлены");
  };

  const onclickCancelSave = () => {
    setItems(skills);
  };

  const addSkill = (index) => {
    if (!inputs[index]) return;
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      ["skills"]: [...updatedItems[index].skills, inputs[index]],
    };
    setItems(updatedItems);
    handleChangeInputs("", index);
  };

  const deleteSkill = (index, skillIndex) => {
    const updatedItems = [...items];
    const newSkills = [...updatedItems[index].skills];
    newSkills.splice(Number(skillIndex), 1);
    updatedItems[index] = {
      ...updatedItems[index],
      ["skills"]: newSkills,
    };
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((skill, index) => (
        <>
          <div className="skillBlock">{skill.title}</div>
          <div className="skills">
            <div className="skills__header">
              <Input
                type="text"
                placeholder="Название контакта"
                value={skill.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
              <div className="manageButtons">
                <DeleteIcon onClick={() => removeItem(index)} />
              </div>
            </div>

            <div className="skills__items">
              {skill.skills.map((item, skillIndex) => (
                <div key={index} className="item">
                  {item}
                  <DeleteIcon onClick={() => deleteSkill(index, skillIndex)} />
                </div>
              ))}
              <div>
                <Input
                  type="text"
                  placeholder="Добавить"
                  icon={
                    <AddItemIcon
                      opacity={!inputs[index] && "50%"}
                      onClick={() => addSkill(index)}
                    />
                  }
                  value={inputs[index]}
                  style={{ marginBottom: 0 + "px" }}
                  onChange={(e) => handleChangeInputs(e.target.value, index)}
                />
              </div>
            </div>
          </div>
        </>
      ))}
      <Button onClick={addElement}>Добавить элемент</Button>
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
