//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../axios";
import MainLayout from "../layouts/MainLayout";
import VerticalLayout from "../layouts/VerticalLayout";
import { Button } from "../ui/button/Button";

import s from "./fullProject.module.scss";
import { GitHubIcon } from "../ui/icons/GitHubIcon";
import Skills from "../components/Skills/Skills";

interface projectData {
  title: string;
  text: string;
  imageUrl: string;
  skills: String[];
  link: string;
  gitHubLink: string;
}

export const FullProject = () => {
  const { id } = useParams();
  const [data, setData] = useState<projectData>({});

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainLayout>
      <VerticalLayout>
        <div className={s.projectPage}>
          <Button background={true} icon={true}>
            <Link to="/">На главную</Link>
          </Button>
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              className={s.projectPage__img}
              alt={data.title}
            />
          )}
          <h2>{data.title}</h2>
          {data.link || data.gitHubLink ? (
            <div className={s.projectPage__links}>
              <a href={data.link} className={s.link}>
                {data.link}
              </a>
              <a href={data.gitHubLink}>
                <GitHubIcon />
              </a>
            </div>
          ) : (
            ""
          )}
          {data.skills && (
            <div className={s.projectPage__skills}>
              <Skills objectSkills={{ "Стэк:": data.skills }} />
            </div>
          )}
          <div className={s.projectPage__text}>
            <p>{data.text}</p>
          </div>
          <Button background={true} icon={true}>
            <Link to="/">На главную</Link>
          </Button>
        </div>
      </VerticalLayout>
    </MainLayout>
  );
};
