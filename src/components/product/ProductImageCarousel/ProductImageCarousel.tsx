import { useProductGallery } from "../../../hooks/useProductGallery";

import { productImages } from "../../../utils";

import styles from "./ProductImageCarousel.module.css";

const ProductImageCarousel = () => {
  const { imageIndex, handleNextImage, handlePreviousImage, handleLightboxToggle } =
    useProductGallery();

  const imageObj = productImages[imageIndex];
  const imageId = imageObj.id;
  const imageUrl = `images/image-product-${imageId}.jpg`;

  return (
    <div className={styles["product-main-image-container"]}>
      <div className={styles["product-hero-img-box"]}>
        <img onClick={handleLightboxToggle} src={imageUrl} alt={imageObj.name} />
      </div>

      <div className={styles["product-button-actions"]}>
        <button
          onClick={handlePreviousImage}
          className={`btn ${styles["btn-prev"]}`}
          aria-label="Previous image">
          <img src="images/icon-previous.svg" />
        </button>
        <button
          onClick={handleNextImage}
          className={`btn ${styles["btn-next"]}`}
          aria-label="Next image">
          <img src="images/icon-next.svg" />
        </button>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
