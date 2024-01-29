//@ts-nocheck

import React, { useEffect, useState } from "react";
import { AccordionItem } from "../../ui/Accordion/AccordionItem";
import { Button } from "../../ui/button/Button";
import { FirstBlock } from "./FirstBlock";
import { Skills } from "./Skills";
import { AboutMe } from "./AboutMe";
import { Contacts } from "./Contacts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Statuses,
  fetchMainpageIngo,
} from "../../redux/MainPage/mainpageSlice";

import "./style.scss";

export const AdminMaininfo = () => {
  const dispatch = useAppDispatch();
  const { mainPageIngo, status } = useAppSelector((state) => state.mainPage);

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, []);

  return (
    <div>
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
          <div className="buttons">
            <Button background={true} onClick={() => onClickSaveData()}>
              Save
            </Button>
            <Button background={true} onClick={() => onClickCancelSave()}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
