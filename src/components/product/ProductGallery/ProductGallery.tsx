import { useProductGallery } from "../../../hooks/useProductGallery";

import ProductGalleryProvider from "../../../contexts/ProductGalleryContext";

import { productImages } from "../../../utils";

import { ProductImageCarousel } from "../";

import styles from "./ProductGallery.module.css";

const ProductGallery = () => {
  return (
    <article className={styles["product-image-gallery"]}>
      {/* main image */}

      <ProductGalleryProvider images={productImages}>
        <ProductImageCarousel />
      </ProductGalleryProvider>

      {/* thumbnail images ( only visible on desktop ) */}
    </article>
  );
};

export default ProductGallery;
