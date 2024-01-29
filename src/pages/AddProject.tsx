//@ts-nocheck

import React, { useRef, useState } from "react";
import { Button } from "../ui/button/Button";
import { AccordionItem } from "../ui/Accordion/AccordionItem";
import { Input } from "../ui/Input";
import axios from "../axios";

import "./addProject.scss";
import { Skills } from "../components/AdminProjects/Skills";
import { Links } from "../components/AdminProjects/Links";
import { useNavigate } from "react-router-dom";

export const AddProject = () => {
  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef(null);
  const [category, setCategory] = useState("PET");

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [skills, setSkills] = useState([]);
  const [link, setLink] = useState("");
  const [gitLink, setGitLink] = useState("");
  const navigate = useNavigate();

  const handleChangeFile = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.log(err);
    }
  };

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
    await axios.post("/projects", fields);
    window.alert("Проект успешно создан");
    navigate(-1);
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  console.log(skills);

  return (
    <div>
      <div className="main-info__block">
        <div className="downloadImg">
          <img src={imageUrl} alt="" />
          <Button
            background={true}
            onClick={() => inputFileRef.current.click()}
            type="button"
          >
            Загрузить картинку
          </Button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
        </div>
        <div className="text">
          <label>
            Выберите категорию:
            <select
              name="selectCategory"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="PET">PET</option>
              <option value="FRILANS">Frilans</option>
              <option value="COMMERCIAL">Commers</option>
            </select>
          </label>
          <Input
            placeholder="Введите заголовок"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            className="text__title"
          ></Input>

          <textarea
            placeholder="Описание проекта"
            rows={5}
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            className="text__text"
          ></textarea>
        </div>
      </div>
      <div className="skills__block">
        <AccordionItem
          title={"Skills"}
          content={<Skills skills={skills} setSkills={setSkills} />}
        />
      </div>
      <div className="links__block">
        <AccordionItem
          title={"Links"}
          content={
            <Links
              link={link}
              setLink={setLink}
              gitLink={gitLink}
              setGitLink={setGitLink}
            />
          }
        />
      </div>
      <div className="buttons">
        <Button onClick={() => onClickCreateProject()} background={true}>
          Создать
        </Button>
        <Button onClick={() => onClickCancel()} background={true}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
