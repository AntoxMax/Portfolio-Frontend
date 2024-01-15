import React from "react";
import { Accordion } from "../../ui/Accordion";
import { AccordionItem } from "../../ui/Accordion/AccordionItem";
import { Button } from "../../ui/button/Button";
import { FirstBlock } from "./FirstBlock";
import { Skills } from "./Skills";
import { AboutMe } from "./AboutMe";
import { Contacts } from "./Contacts";

export const AdminMaininfo = () => {
  return (
    <div>
      <AccordionItem title={"First block"} content={<FirstBlock />} />
      <AccordionItem title={"Skills"} content={<Skills />} />
      <AccordionItem title={"About me"} content={<AboutMe />} />
      <AccordionItem title={"Contacts"} content={<Contacts />} />
      <div className="buttons">
        <Button background={true}>Save</Button>
        <Button background={true}>Cancel</Button>
      </div>
    </div>
  );
};
