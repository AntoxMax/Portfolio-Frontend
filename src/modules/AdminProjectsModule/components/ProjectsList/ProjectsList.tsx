import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Project } from "../../../../redux/common-types";

import { EditIcon } from "../../../../ui/icons/EditIcon";
import { DeleteIcon } from "../../../../ui/icons/DeleteIcon";
import { deleteProject } from "../../../../redux/oneProject/thunks";

type ProjectListProps = {
  deleted: boolean;
  setDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectsList: React.FC<ProjectListProps> = ({
  deleted,
  setDeleted,
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.projects.projects);

  const onClickDeleteProject = async (id: string) => {
    await dispatch(deleteProject(id));
    setDeleted(!deleted);
  };

  return (
    <>
      {items.map((project: Project) => (
        <div key={project._id} className="item">
          <img src={project.imageUrl} alt={project.title} />
          <div className="title">{project.title}</div>
          <div className="item__buttons">
            <Link to={`/admin-bar/edit-project/${project._id}`}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => onClickDeleteProject(project._id)} />
          </div>
        </div>
      ))}
    </>
  );
};
