import { useCart } from "../../../hooks/useCart";

import styles from "./QuantitySelector.module.css";

type TQuantitySelectorProps = {
  productId: string;
};

const QuantitySelector = ({ productId }: TQuantitySelectorProps) => {
  const {
    state: { items },

    handleAddToCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
  } = useCart();

  let quantity = items.find((item) => item.id === productId)?.quantity;

  const handleIncreaseQuantity = () => {
    handleAddToCart(productId);
    if (items.length) {
      const newQuantity = quantity! + 1;
      handleQuantityIncrease(productId, newQuantity);
    }
  };

  const handleDecreaseQuantity = () => {
    handleAddToCart(productId);
    if (items.length) {
      const newQuantity = !quantity ? quantity! : quantity! - 1;
      handleQuantityDecrease(productId, newQuantity);
    }
  };

  return (
    <div className={styles["quantity-selector"]} data-product={productId}>
      <button
        onClick={handleDecreaseQuantity}
        className={`btn ${styles["quantity-decrease"]}`}
        aria-label="Decrease quantity">
        <img src="/images/icon-minus.svg" />
      </button>
      <span className={styles["quantity"]}>{quantity ?? 0}</span>
      <button
        onClick={handleIncreaseQuantity}
        aria-label="Increase quantity"
        className={`btn ${styles["quantity-increase"]}`}>
        <img src="/images/icon-plus.svg" />
      </button>
    </div>
  );
};

export default QuantitySelector;
