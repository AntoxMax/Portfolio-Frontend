import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchProjectsCategory } from "../../redux/Project/thunks";
import { projectCategories } from "../../redux/common-types";

import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { SelectCategory } from "../../components/SelectCategory/SelectCategory";
import { Button } from "../../ui/button/Button";

import s from "./style.module.scss";

export const AdminProjects = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState(projectCategories.NoCategory);
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (category === projectCategories.NoCategory) {
      dispatch(fetchProjectsCategory());
    } else {
      dispatch(fetchProjectsCategory(category));
    }
  }, [category, deleted, dispatch]);

  return (
    <div>
      <div className={s.projects__header}>
        <Link to="/admin-bar/add-project">
          <Button background={true}>Создать проект</Button>
        </Link>
        <SelectCategory setCategory={setCategory} />
      </div>
      <ProjectsList deleted={deleted} setDeleted={setDeleted} />
    </div>
  );
};
