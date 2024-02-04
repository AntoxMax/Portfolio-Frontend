import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProject, patchProject } from "../../redux/oneProject/thunks";
import { Statuses, projectCategories } from "../../redux/common-types";
import { useImageUploader } from "../../hooks/useUploadImg";

import { DownloadImage } from "./components/DownloadImage/DownloadImage";
import { ContentBlock } from "./components/ContentBlock/ContentBlock";
import { SkillsBlock } from "./components/SkillsBlock/SkillsBlock";
import { LinksBlock } from "./components/LinksBlock/LinksBlock";
import { Buttons } from "./components/Buttons/Buttons";

import s from "./addProject.module.scss";

export const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { project, status } = useAppSelector((state) => state.oneProject);

  const [category, setCategory] = useState<projectCategories>(
    projectCategories.NoCategory
  );
  const { imageUrl, setImageUrl, handleChangeFile } = useImageUploader("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [skills, setSkills] = useState([""]);
  const [link, setLink] = useState("");
  const [gitLink, setGitLink] = useState("");

  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch, id]);

  useEffect(() => {
    setImageUrl(project.imageUrl);
    setCategory(project.category as projectCategories);
    setTitle(project.title);
    setText(project.text);
    setSkills(project.skills);
    setLink(project.link);
    setGitLink(project.gitLink);
  }, [status]);

  const onClickEditProject = async () => {
    const fields = {
      title,
      text,
      imageUrl,
      category,
      skills,
      link,
      gitLink,
    };
    dispatch(patchProject({ id, fields }));
    alert("Проект отредактирован");
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      {status === Statuses.Success ? (
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
            onClickEditProject={onClickEditProject}
            onClickCancel={onClickCancel}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
