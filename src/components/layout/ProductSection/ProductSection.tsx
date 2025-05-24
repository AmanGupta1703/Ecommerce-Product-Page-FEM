import { ProductGallery } from "../../product";

import styles from "./ProductSection.module.css";

const ProductSection = () => {
  return (
    <section className={styles["section-product-sneaker"]}>
      <div className={styles["section-wrapper"]}>
        <ProductGallery />
      </div>
    </section>
  );
};

export default ProductSection;
