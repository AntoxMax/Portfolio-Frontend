import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteProject,
  fetchProjectsCategory,
} from "../../redux/Project/projectSlice";
import "./style.scss";
import { Button } from "../../ui/button/Button";
import { Link } from "react-router-dom";
import { EditIcon } from "../../ui/icons/EditIcon";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";

export const AdminProjects = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.projects.projects);
  const [category, setCategory] = useState("noCategory");
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (category === "noCategory") {
      dispatch(fetchProjectsCategory());
    } else {
      dispatch(fetchProjectsCategory(category));
    }
  }, [category, deleted]);

  const onClickDeleteProject = async (id: string) => {
    await dispatch(deleteProject(id));
    setDeleted(!deleted);
  };

  return (
    <div>
      <div className="projects__header">
        <Link to="/admin-bar/add-project">
          <Button background={true}>Создать проект</Button>
        </Link>
        <label>
          Выберите категорию:
          <select
            name="selectCategory"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="noCategory">Без категории</option>
            <option value="PET">PET</option>
            <option value="FRILANS">Frilans</option>
            <option value="COMMERCIAL">Commers</option>
          </select>
        </label>
      </div>
      {items.map((project: any) => (
        // <Link to={`/projects/${project._id}`} key={project._id}>
        <div className="item">
          <img src={project.imageUrl} alt={project.title} />
          <div className="title">{project.title}</div>
          <div className="item__buttons">
            <Link to={`/admin-bar/edit-project/${project._id}`}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => onClickDeleteProject(project._id)} />
          </div>
        </div>
        // </Link>
      ))}
    </div>
  );
};
