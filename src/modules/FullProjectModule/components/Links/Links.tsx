import React from "react";

import s from "../../fullProject.module.scss";
import { GitHubIcon } from "../../../../ui/icons/GitHubIcon";

type LinksProps = {
  link: string;
  gitLink: string;
};

export const Links: React.FC<LinksProps> = ({ link, gitLink }) => {
  return (
    <div className={s.links}>
      {link && (
        <a href={link} className={s.links__link}>
          {link}
        </a>
      )}
      {gitLink && (
        <a href={gitLink} className={s.links__gitLink}>
          <GitHubIcon />
        </a>
      )}
    </div>
  );
};
