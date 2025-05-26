import ProductGalleryProvider from "../../../contexts/ProductGalleryContext";

import { productImages, productThumbnailImages } from "../../../utils";

import { ProductImageCarousel, ProductThumbnailImages } from "../";

import styles from "./ProductGallery.module.css";

const ProductGallery = () => {
  return (
    <article className={styles["product-image-gallery"]}>
      {/* main image */}

      <ProductGalleryProvider images={productImages}>
        <ProductImageCarousel />

        {/* thumbnail images ( only visible on desktop ) */}

        <ProductThumbnailImages />
      </ProductGalleryProvider>
    </article>
  );
};

export default ProductGallery;
