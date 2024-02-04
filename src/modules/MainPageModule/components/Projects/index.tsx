import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { fetchProjectsCategory } from "../../../../redux/Project/thunks";

import VerticalLayout from "../../../../layouts/VerticalLayout";
import { BlockTitle } from "../../../../ui/blockTitle/BlockTitle";

import { Menu } from "./Menu";
import { ProjectsItems } from "./ProjectsItems";

import { projectCategories } from "../../../../redux/common-types";

import s from "./style.module.scss";

export const Projects = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<projectCategories>(
    projectCategories.Pet
  );

  const { items } = useAppSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjectsCategory(category));
  }, [category, dispatch]);

  return (
    <VerticalLayout>
      <BlockTitle>Проекты</BlockTitle>
      <div className={s.projects}>
        <Menu category={category} setCategory={setCategory} />
        <ProjectsItems projects={items} />
      </div>
    </VerticalLayout>
  );
};
