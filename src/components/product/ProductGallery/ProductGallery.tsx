import { ProductImageCarousel, ProductThumbnailImages } from "../";

import styles from "./ProductGallery.module.css";

const ProductGallery = () => {
  return (
    <article className={styles["product-image-gallery"]}>
      {/* main image */}

      <ProductImageCarousel />

      {/* thumbnail images ( only visible on desktop ) */}

      <ProductThumbnailImages />
    </article>
  );
};

export default ProductGallery;
