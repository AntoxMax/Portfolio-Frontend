import React from "react";
import { ButtonUploadImg } from "../../../../components/ButtonUploadImg/ButtonUploadImg";

type ImageProps = {
  imageUrl: string;
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const DownloadImage: React.FC<ImageProps> = ({
  imageUrl,
  handleChangeFile,
}) => {
  return (
    <div className="downloadImg">
      <img src={imageUrl} alt="" />
      <ButtonUploadImg handleChangeFile={handleChangeFile} />
    </div>
  );
};
