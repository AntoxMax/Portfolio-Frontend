import s from "./style.module.scss";

interface Props {
  color?: string;
  children: React.ReactChild | React.ReactNode;
}

export const Button: React.FC<Props> = ({ color = "black", children }) => {
  return <button className={s.button + " " + s[color]}>{children}</button>;
};
