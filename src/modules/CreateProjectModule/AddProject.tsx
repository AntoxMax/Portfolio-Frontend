import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectCategories } from "../../redux/common-types";
import { useAppDispatch } from "../../redux/hooks";
import { createProject } from "../../redux/oneProject/thunks";
import { useImageUploader } from "../../hooks/useUploadImg";

import { DownloadImage } from "./components/DownloadImage/DownloadImage";
import { ContentBlock } from "./components/ContentBlock/ContentBlock";
import { SkillsBlock } from "./components/SkillsBlock/SkillsBlock";
import { LinksBlock } from "./components/LinksBlock/LinksBlock";
import { Buttons } from "./components/Buttons/Buttons";

import s from "./addProject.module.scss";

export const AddProject = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { imageUrl, handleChangeFile } = useImageUploader("");
  const [category, setCategory] = useState(projectCategories.Pet);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [skills, setSkills] = useState([""]);
  const [link, setLink] = useState("");
  const [gitLink, setGitLink] = useState("");

  const onClickCreateProject = async () => {
    const fields = {
      title,
      text,
      imageUrl,
      category,
      skills,
      link,
      gitLink,
    };
    dispatch(createProject(fields));
    window.alert("Проект успешно создан");
    navigate(-1);
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={s.main_info__block}>
        <DownloadImage
          imageUrl={imageUrl}
          handleChangeFile={handleChangeFile}
        />
        <ContentBlock
          setCategory={setCategory}
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
        />
      </div>
      <SkillsBlock skills={skills} setSkills={setSkills} />
      <LinksBlock
        link={link}
        setLink={setLink}
        gitLink={gitLink}
        setGitLink={setGitLink}
      />
      <Buttons
        onClickCreateProject={onClickCreateProject}
        onClickCancel={onClickCancel}
      />
    </div>
  );
};
