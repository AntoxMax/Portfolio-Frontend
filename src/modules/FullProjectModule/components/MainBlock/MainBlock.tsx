import React from "react";

import s from "../../fullProject.module.scss";
import { projectCategories } from "../../../../redux/common-types";

type MainBlockProps = {
  imageUrl: string;
  title: string;
  text: string;
  category: projectCategories;
  linkComponent: React.ReactNode;
};

export const MainBlock: React.FC<MainBlockProps> = ({
  imageUrl,
  title,
  text,
  category,
  linkComponent,
}) => {
  return (
    <div className={s.mainBlock}>
      <div className={s.mainBlock__img}>
        {imageUrl && (
          <img src={imageUrl} className={s.projectPage__img} alt={title} />
        )}
        <div className={s.mainBlock__category}>{category}</div>
      </div>
      <div className={s.mainBlock__content}>
        <h2>{title}</h2>
        <p>{text}</p>
        {linkComponent}
      </div>
    </div>
  );
};
