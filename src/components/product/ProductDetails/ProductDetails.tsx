import { useCart } from "../../../hooks/useCart";

import { productData } from "../../../utils";

import { QuantitySelector } from "../";
import { Button } from "../../ui";

import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { handleAddToCart } = useCart();

  return (
    <article className={styles["product-details"]}>
      <div className={styles["product-details-meta"]}>
        <h2 className={styles["brand-name"]}>{productData.companyName}</h2>
        <h1 className={styles["product-title"]}>{productData.title}</h1>
        <p className={styles["product-description"]}>{productData.description}</p>
      </div>

      <div className={styles["product-price"]}>
        <div className={styles["price-group"]}>
          <span className={styles["current-price"]}>${productData.price.current.toFixed(2)}</span>
          <span className={styles["discount-badge"]}>{productData.price.discountPercent}%</span>
        </div>
        <span className={styles["original-price"]}>${productData.price.original.toFixed(2)}</span>
      </div>

      <div className={styles["product-actions"]}>
        <QuantitySelector productId={productData.productId} />
        <Button className="btn-cart" onClick={() => handleAddToCart(productData.productId)}>
          <span aria-label="cart icon">
            <img src="images/icon-cart.svg" alt="" />
          </span>
          <span role="button" aria-label="Add this product to cart">
            Add to cart
          </span>
        </Button>
      </div>
    </article>
  );
};

export default ProductDetails;
