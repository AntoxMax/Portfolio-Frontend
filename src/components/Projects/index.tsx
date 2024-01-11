//@ts-nocheck

import VerticalLayout from "../../layouts/VerticalLayout";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import s from "./style.module.scss";

import projectImg from "../../assets/img/Rectangle 1.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { Statuses, fetchProjects } from "../../redux/Project/projectSlice";
import { Link } from "react-router-dom";

export const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects.projects);

  console.log(projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <VerticalLayout>
      <BlockTitle>Проекты</BlockTitle>
      <div className={s.projects}>
        <div className={s.projects__menu}>
          <div className={s.menu__item}>ПЭТ-проекты</div>
          <div className={s.menu__item}>Фриланс</div>
          <div className={s.menu__item}>Коммерческий опыт</div>
        </div>
        <div className={s.projects__items}>
          {projects.items.map((project) => (
            <Link
              to={`/projects/${project._id}`}
              key={project._id}
              className={s.projects__item}
            >
              <img src={project.imageUrl} />
              <p className={s.title}>{project.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </VerticalLayout>
  );
};
