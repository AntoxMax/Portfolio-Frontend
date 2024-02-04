import { useEffect } from "react";
import { AccordionItem } from "../../ui/Accordion/AccordionItem";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "./style.scss";
import { fetchMainpageIngo } from "../../redux/MainPage/thunks";
import { Statuses } from "../../redux/common-types";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { Skills } from "./components/Skills/Skills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contacts } from "./components/Contacts/Contacts";
import VerticalLayout from "../../layouts/VerticalLayout";

export const AdminMaininfo = () => {
  const dispatch = useAppDispatch();
  const { mainPageIngo, status } = useAppSelector((state) => state.mainPage);

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, [dispatch]);

  return (
    <VerticalLayout>
      {status === Statuses.Success ? (
        <>
          <AccordionItem
            title={"First block"}
            content={<FirstBlock data={mainPageIngo.firstBlock} />}
          />
          <AccordionItem
            title={"Skills"}
            content={<Skills data={mainPageIngo.skills} />}
          />
          <AccordionItem
            title={"About me"}
            content={<AboutMe data={mainPageIngo.textAboutMe} />}
          />
          <AccordionItem
            title={"Contacts"}
            content={<Contacts data={mainPageIngo.contacts} />}
          />
        </>
      ) : (
        // TODO: Для все компонентов создать компонент лодера
        <h1>Loading...</h1>
      )}
    </VerticalLayout>
  );
};
