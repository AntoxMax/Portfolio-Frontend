import s from "./mainLayout.module.scss";

interface LayoutProps {
  children: React.ReactChild | React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={s.mainLayout}>{children}</div>;
};

export default MainLayout;
