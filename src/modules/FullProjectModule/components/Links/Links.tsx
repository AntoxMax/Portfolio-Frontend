import React from "react";

import s from "../../fullProject.module.scss";
import { GitHubIcon } from "../../../../ui/icons/GitHubIcon";

type LinksProps = {
  link: string;
  gitLink: string;
};

export const Links: React.FC<LinksProps> = ({ link, gitLink }) => {
  return (
    <div>
      {link || gitLink ? (
        <div className={s.projectPage__links}>
          <a href={link} className={s.link}>
            {link}
          </a>
          <a href={gitLink}>
            <GitHubIcon />
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
