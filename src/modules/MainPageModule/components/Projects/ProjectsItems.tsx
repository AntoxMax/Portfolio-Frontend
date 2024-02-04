import React from "react";

import { Link } from "react-router-dom";
import { Project } from "../../../../redux/common-types";

import s from "./style.module.scss";

type Props = {
  projects: Project[];
};

export const ProjectsItems: React.FC<Props> = ({ projects }) => {
  return (
    <div className={s.projects__items}>
      {projects.map((project: Project) => (
        <Link
          to={`/projects/${project._id}`}
          key={project._id}
          className={s.projects__item}
        >
          <img src={project.imageUrl} alt="Фото проекта" />
          <p className={s.title}>{project.title}</p>
        </Link>
      ))}
    </div>
  );
};
