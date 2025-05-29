import { useCart } from "../../../hooks/useCart";
import { useMenu } from "../../../hooks/useMenu";

import { CartItem } from "../../product/";
import { PrimayNav } from "../../ui";

import { productData } from "../../../utils";

import styles from "./Header.module.css";

const Header = () => {
  const { toggle } = useMenu();
  const {
    state: { isOpen, items },
    handleCartToggle,
  } = useCart();

  const quantity = items.find((item) => item?.id === productData.productId)?.quantity;

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
          <div className={styles["cart-container"]}>
            <button className={`btn ${styles["header-cart"]}`} onClick={handleCartToggle}>
              <img src="/images/icon-cart.svg" alt="Shopping cart" />
              {quantity && (
                <span className={`${styles["badge"]} ${styles["badge-primary"]}`}>{quantity}</span>
              )}
            </button>

            <div className={`${!isOpen ? styles.hidden : ""} ${styles["cart"]}`}>
              <div className={styles["cart-header"]}>
                <h2>Cart</h2>
              </div>

              <div
                className={`${!items.length ? styles["cart-body-empty"] : null} ${
                  styles["cart-body"]
                }`}>
                {!items.length ? (
                  <span className={`${styles["empty-cart"]}`}>Your cart is empty</span>
                ) : null}

                {items.length ? <CartItem /> : null}
              </div>
            </div>
          </div>
          <button className={`btn ${styles["header-profile-icon"]}`}>
            <img src="/images/image-avatar.png" alt="User profile avatar" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
