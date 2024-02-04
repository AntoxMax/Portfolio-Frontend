import React from "react";

import s from "../../fullProject.module.scss";

type MainBlockProps = {
  imageUrl: string;
  title: string;
  text: string;
};

export const MainBlock: React.FC<MainBlockProps> = ({
  imageUrl,
  title,
  text,
}) => {
  return (
    <div className="mainBlock">
      <div className="mainBlock__img">
        {imageUrl && (
          <img src={imageUrl} className={s.projectPage__img} alt={title} />
        )}
      </div>
      <div className="mainBlock__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
