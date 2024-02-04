import React from "react";
import { AccordionItem } from "../../../../ui/Accordion/AccordionItem";
import { Links } from "../../../../components/AdminLinks/AdminLinks";

import s from "../../addProject.module.scss";

type LinksProps = {
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  gitLink: string;
  setGitLink: React.Dispatch<React.SetStateAction<string>>;
};

export const LinksBlock: React.FC<LinksProps> = ({
  link,
  setLink,
  gitLink,
  setGitLink,
}) => {
  return (
    <div className={s.links__block}>
      <AccordionItem
        title={"Links"}
        content={
          <Links
            link={link}
            setLink={setLink}
            gitLink={gitLink}
            setGitLink={setGitLink}
          />
        }
      />
    </div>
  );
};
