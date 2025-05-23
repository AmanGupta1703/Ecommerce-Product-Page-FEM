import styles from "./Layout.module.css";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
