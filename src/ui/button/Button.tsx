import s from "./style.module.scss";
import { BackIcon } from "../../ui/icons/BackIcon";

interface Props {
  color?: string;
  icon?: boolean;
  background?: boolean;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void);
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactChild | React.ReactNode;
}

export const Button: React.FC<Props> = ({
  color,
  icon,
  background,
  onClick,
  children,
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
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
