import React from "react";
import styles from "./mainLayout.module.scss";

interface LayoutProps {
  children: React.ReactChild | React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MainLayout;
