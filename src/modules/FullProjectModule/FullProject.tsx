import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProject } from "../../redux/oneProject/thunks";

import MainLayout from "../../layouts/MainLayout";
import VerticalLayout from "../../layouts/VerticalLayout";

import { MainBlock } from "./components/MainBlock/MainBlock";
import { Links } from "./components/Links/Links";
import { GoOnBack } from "../../components/GoOnBack/GoOnBack";
import { SkillsBlock } from "./components/Skills/Skills";

import s from "./fullProject.module.scss";

export const FullProject = () => {
  const dispatch = useAppDispatch();
  const { project } = useAppSelector((state) => state.oneProject);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch, id]);

  return (
    <MainLayout>
      <VerticalLayout>
        <div className={s.projectPage}>
          <GoOnBack />
          <MainBlock
            imageUrl={project.imageUrl}
            title={project.title}
            text={project.text}
            category={project.category}
            linkComponent={
              <Links link={project.link} gitLink={project.gitLink} />
            }
          />

          <SkillsBlock skills={project.skills} />
          <GoOnBack />
        </div>
      </VerticalLayout>
    </MainLayout>
  );
};
