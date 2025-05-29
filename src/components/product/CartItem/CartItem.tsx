import { useCart } from "../../../hooks/useCart";

import { Button } from "../../ui";

import styles from "./CartItem.module.css";

const CartItem = () => {
  const {
    state: { items },
    handleItemDelete,
  } = useCart();

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={`${styles["cart-item"]}`}>
          <div className={styles["cart-item-wrapper"]}>
            <img
              className={styles["cart-item-thumbnail"]}
              src={item.imageUrl}
              alt={`Thumbnail of ${item.name}`}
            />

            <div className={styles["cart-item-body"]}>
              <div className={styles["cart-item-text"]}>
                <span className={styles["product-name"]}>{item.name}</span>
                <span className={styles["product-price"]}>
                  ${item.price.toFixed(2)} x {item.quantity}{" "}
                  <span className={styles["product-final-price"]}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </span>
              </div>

              <div className={styles["cart-delete-icon"]}>
                <button
                  className="btn"
                  aria-label="Delete item from cart"
                  onClick={() => handleItemDelete(item.id)}>
                  <img src="/images/icon-delete.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <Button className="btn-cart">Checkout</Button>
        </div>
      ))}
    </>
  );
};

export default CartItem;
