import s from "./style.module.scss";

interface Props {
  children: React.ReactChild | React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button className={s.button}>{children}</button>;
};
