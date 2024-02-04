import React from "react";
import { SelectCategory } from "../../../../components/SelectCategory/SelectCategory";
import { Input } from "../../../../ui/Input";
import { projectCategories } from "../../../../redux/common-types";

type ContentProps = {
  setCategory: React.Dispatch<React.SetStateAction<projectCategories>>;
  title: string;
  setTitle: (value: React.SetStateAction<string>) => void;
  text: string;
  setText: (value: React.SetStateAction<string>) => void;
};

export const ContentBlock: React.FC<ContentProps> = ({
  setCategory,
  title,
  setTitle,
  text,
  setText,
}) => {
  return (
    <div className="text">
      <SelectCategory setCategory={setCategory} />
      <Input
        placeholder="Введите заголовок"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        className="text__title"
      ></Input>

      <textarea
        placeholder="Описание проекта"
        rows={5}
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        className="text__text"
      ></textarea>
    </div>
  );
};
