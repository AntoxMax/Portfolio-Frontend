import React from "react";
import { ButtonUploadImg } from "../../../../components/ButtonUploadImg/ButtonUploadImg";

import s from "../../addProject.module.scss";

type ImageProps = {
  imageUrl: string;
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const DownloadImage: React.FC<ImageProps> = ({
  imageUrl,
  handleChangeFile,
}) => {
  return (
    <div className={s.downloadImg}>
      <img src={imageUrl} alt="img" />
      <ButtonUploadImg handleChangeFile={handleChangeFile} />
    </div>
  );
};
