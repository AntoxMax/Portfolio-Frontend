import s from "./style.module.scss";
import { BackIcon } from "../../ui/icons/BackIcon";

interface Props {
  color?: string;
  icon?: boolean;
  background?: boolean;
  children: React.ReactChild | React.ReactNode;
}

export const Button: React.FC<Props> = ({
  color,
  icon,
  background,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        s.button +
        " " +
        (color ? s[color] : "") +
        " " +
        (background ? s["background"] : "")
      }
    >
      {children} {icon ? <BackIcon /> : ""}
    </button>
  );
};
