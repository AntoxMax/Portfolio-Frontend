import s from "./mainLayout.module.scss";

interface LayoutProps {
  children: React.ReactChild | React.ReactNode;
}

const VerticalLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={s.verticalLayout}>{children}</div>;
};

export default VerticalLayout;
