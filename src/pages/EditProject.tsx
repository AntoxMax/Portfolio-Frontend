//@ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import axios from "../axios";
import { Button } from "../ui/button/Button";
import { Input } from "../ui/Input";
import { AccordionItem } from "../ui/Accordion/AccordionItem";
import { Links } from "../components/AdminProjects/Links";
import { Skills } from "../components/AdminProjects/Skills";

export const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
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

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res: any) => {
        setProject(res.data);
        setImageUrl(res.data.imageUrl);
        setCategory(res.data.category);
        setTitle(res.data.title);
        setText(res.data.text);
        setSkills(res.data.skills);
        setLink(res.data.link);
        setGitLink(res.data.gitLink);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    await axios.patch(`/projects/${project._id}`, fields);
    alert("Проект отредактирован");
  };

  console.log(skills);
  return (
    <div>
      {project ? (
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
            <Button onClick={() => onClickEditProject()} background={true}>
              Создать
            </Button>
            <Button onClick={() => onClickCancel()} background={true}>
              Отменить
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
