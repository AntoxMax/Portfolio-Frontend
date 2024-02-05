import { RevolvingDot } from "react-loader-spinner";

import s from "./style.module.scss";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#fff"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
