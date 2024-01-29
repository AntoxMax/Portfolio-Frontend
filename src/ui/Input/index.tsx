import React from "react";

import s from "./style.module.scss";

export const Input = ({ icon, ...props }: any) => {
  return (
    <div className={s.customInput}>
      <input {...props} />
      {icon && <div className={s.customInput__icon}>{icon}</div>}
    </div>
  );
};
