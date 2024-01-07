import s from "./style.module.scss";

interface Props {
  children: React.ReactChild | React.ReactNode;
}

export const BlockTitle: React.FC<Props> = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};
