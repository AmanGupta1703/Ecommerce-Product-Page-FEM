import { useMenu } from "../../../hooks/useMenu";

import { PrimayNav } from "../../ui";

import styles from "./Header.module.css";

const Header = () => {
  const { toggle } = useMenu();

  return (
    <header className={`${styles.header}`}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-logo-nav"]}>
          <button onClick={toggle} className={`btn ${styles["header-nav-btn"]}`}>
            <img src="/images/icon-menu.svg" />
          </button>
          <img src="/images/logo.svg" className={styles["header-logo"]} />

          <PrimayNav />
        </div>

        <div className={styles["header-cart-profile"]}>
          <button className={`btn ${styles["header-cart"]}`}>
            <img src="/images/icon-cart.svg" alt="Shopping cart" />
          </button>
          <button className={`btn ${styles["header-profile-icon"]}`}>
            <img src="/images/image-avatar.png" alt="User profile avatar" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
