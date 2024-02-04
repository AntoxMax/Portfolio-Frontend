import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateMainpageIngo } from "../../../../redux/MainPage/thunks";
import { Input } from "../../../../ui/Input";
import { AddItemIcon } from "../../../../ui/icons/AddItemIcon";
import { DeleteIcon } from "../../../../ui/icons/DeleteIcon";
import { Button } from "../../../../ui/button/Button";
import { skillsType } from "../../../../redux/MainPage/types";

// TODO: Optimize component

type SkillsProps = {
  data: skillsType[];
};

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const [skills, setSkills] = useState(data);
  const [inputs, setInputs] = useState(Array(data.length));

  const addElement = () => {
    setItems([...items, { title: "", skills: [] }]);
    setInputs([...inputs, ""]);
  };

  const handleChange = (index: number, key: string, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [key]: value };
    setItems(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChangeInputs = (value: any, index: number) => {
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

  const addSkill = (index: number) => {
    if (!inputs[index]) return;
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      ["skills"]: [...updatedItems[index].skills, inputs[index]],
    };
    setItems(updatedItems);
    handleChangeInputs("", index);
  };

  const deleteSkill = (index: number, skillIndex: number) => {
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
      {items.map((skill: skillsType, index: number) => (
        <>
          <div className="skillBlock">{skill.title}</div>
          <div className="skills">
            <div className="skills__header">
              <Input
                type="text"
                placeholder="Название контакта"
                value={skill.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, "title", e.target.value)
                }
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeInputs(e.target.value, index)
                  }
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
