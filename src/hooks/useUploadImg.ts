import { useState } from "react";
import axios from "../services/axios";

export const useImageUploader = (initialImageUrl: string) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (!e.target.files) return;
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return { imageUrl, setImageUrl, handleChangeFile };
};
