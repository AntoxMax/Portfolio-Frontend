import React, { useEffect } from "react";
import { MainFirstBlock } from "../components/MainFirstBlock";
import { SkillsBLock } from "../components/SkillsBlock";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchMainpageIngo } from "../redux/MainPage/mainpageSlice";

export const Main = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.mainPage.mainPageIngo);

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, []);

  return (
    <>
      <MainLayout>
        <MainFirstBlock firstBLock={data.firstBlock} contacts={data.contacts} />
        <SkillsBLock data={data.skills} />
        <AboutMe data={data.textAboutMe} />
        <Projects />
        <Contacts contacts={data.contacts} />
      </MainLayout>
      <Footer />
    </>
  );
};
