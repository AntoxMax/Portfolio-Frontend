import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { skillsType } from "../../../../redux/MainPage/types";

import { updateMainpageIngo } from "../../../../redux/MainPage/thunks";
import { Button } from "../../../../ui/button/Button";
import { Buttons } from "../Buttons/Buttons";
import { SkillsBlock } from "./SkillsBlock";

type SkillsProps = {
  data: skillsType[];
};

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState(data);
  const [skills, setSkills] = useState(data);
  const [inputs, setInputs] = useState(
    Array.from({ length: data.length }, () => "")
  );

  const addElement = () => {
    setItems([...items, { title: "", skills: [] }]);
    setInputs([...inputs, ""]);
  };

  const onClickSaveData = async () => {
    setSkills(items);
    dispatch(updateMainpageIngo({ items }));
    window.alert("Данные обновлены");
  };

  const onClickCancelSave = () => {
    setItems(skills);
  };

  return (
    <div>
      <SkillsBlock
        items={items}
        setItems={setItems}
        inputs={inputs}
        setInputs={setInputs}
      />
      <Button onClick={addElement}>Добавить элемент</Button>
      <Buttons
        onClickSaveData={onClickSaveData}
        onClickCancelSave={onClickCancelSave}
      />
    </div>
  );
};
