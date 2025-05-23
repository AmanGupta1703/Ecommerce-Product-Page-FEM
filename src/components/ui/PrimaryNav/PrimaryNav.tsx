import { useMenu } from "../../../hooks/useMenu";

import { primaryNavigation } from "../../../utils";

import styles from "./PrimaryNav.module.css";

const PrimayNav = () => {
  const { toOpen, toggle } = useMenu();

  return (
    <>
      <div
        className={`${styles["backdrop"]} ${toOpen ? `${styles["backdrop-active"]}` : null}`}></div>
      <nav
        className={`${styles["primary-nav"]} ${toOpen ? `${styles["primary-nav-active"]}` : null}`}>
        <button onClick={toggle} className={`btn ${styles["btn-close"]}`}>
          <img src="/images/icon-close.svg" />
        </button>
        <ul className={styles["nav"]}>
          {primaryNavigation.map((navLink) => (
            <li key={navLink.label} className={styles["nav-item"]}>
              <a
                onClick={(e) => e.preventDefault()}
                className={styles["nav-link"]}
                href={navLink.url}>
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default PrimayNav;
