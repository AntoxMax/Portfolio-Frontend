import React from "react";
import { MainFirstBlock } from "../components/MainFirstBlock";
import { SkillsBLock } from "../components/SkillsBlock";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export const Main = () => {
  return (
    <>
      <MainLayout>
        <MainFirstBlock />
        <SkillsBLock />
        <AboutMe />
        <Projects />
        <Contacts />
      </MainLayout>
      <Footer />
    </>
  );
};
