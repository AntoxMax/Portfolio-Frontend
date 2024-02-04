import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMainpageIngo } from "../../redux/MainPage/thunks";

import { MainFirstBlock } from "./components/MainFirstBlock";
import { SkillsBLock } from "./components/SkillsBlock";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import MainLayout from "../../layouts/MainLayout";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mainPageIngo } = useAppSelector((state) => state.mainPage);

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, [dispatch]);

  return (
    <>
      <MainLayout>
        <MainFirstBlock
          firstBlock={mainPageIngo.firstBlock}
          contacts={mainPageIngo.contacts}
        />
        <SkillsBLock data={mainPageIngo.skills} />
        <AboutMe data={mainPageIngo.textAboutMe} />
        <Projects />
        <Contacts contacts={mainPageIngo.contacts} />
      </MainLayout>
      <Footer />
    </>
  );
};
