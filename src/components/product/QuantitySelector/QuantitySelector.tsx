import styles from "./QuantitySelector.module.css";

const QuantitySelector = () => {
  return (
    <div className={styles["quantity-selector"]}>
      <button className={`btn ${styles["quantity-increase"]}`}>
        <img src="/images/icon-plus.svg" />
      </button>
      <span className={styles["quantity"]}>0</span>
      <button className={`btn ${styles["quantity-decrease"]}`}>
        <img src="/images/icon-minus.svg" />
      </button>
    </div>
  );
};

export default QuantitySelector;
