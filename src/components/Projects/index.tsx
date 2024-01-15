//@ts-nocheck

import VerticalLayout from "../../layouts/VerticalLayout";
import { BlockTitle } from "../../ui/blockTitle/BlockTitle";
import s from "./style.module.scss";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import {
  Statuses,
  fetchProjectsCategory,
} from "../../redux/Project/projectSlice";
import { Link } from "react-router-dom";

export enum projectCategories {
  Pet = "PET",
  Frilans = "FRILANS",
  Commercial = "COMMERCIAL",
}

export const Projects = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<projectCategories>(
    projectCategories.Pet
  );
  //TODO: сделать добавление класса active к эелементам меню по индексам, useState инициализировать начальным индексом
  const [active, setActive] = useState<number>(1);
  const projects = useAppSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjectsCategory(category));
  }, [category]);

  return (
    <VerticalLayout>
      <BlockTitle>Проекты</BlockTitle>
      <div className={s.projects}>
        <div className={s.projects__menu}>
          <div
            className={s.menu__item}
            onClick={() => setCategory(projectCategories.Pet)}
          >
            ПЭТ-проекты
          </div>
          <div
            className={s.menu__item}
            onClick={() => setCategory(projectCategories.Frilans)}
          >
            Фриланс
          </div>
          <div
            className={s.menu__item}
            onClick={() => setCategory(projectCategories.Commercial)}
          >
            Коммерческий опыт
          </div>
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
