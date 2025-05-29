import { useProductGallery } from "../../../hooks/useProductGallery";

import { productThumbnailImages } from "../../../utils";

import styles from "./ImageGalleryModal.module.css";

const ImageGalleryModal = () => {
  const {
    imageIndex,
    showLightbox,
    handlePreviousImage,
    handleNextImage,
    handleLightboxToggle,
    setImageIndex,
  } = useProductGallery();

  return showLightbox ? (
    <>
      <div className={styles["backdrop"]}></div>
      <div className={styles["image-modal"]}>
        <button
          onClick={handleLightboxToggle}
          className={`btn ${styles["image-model-close"]}`}
          aria-label="Close image gallery">
          <img src="images/icon-close.svg" />
        </button>

        <div className={styles["main-image"]}>
          <div className={styles["main-image-box"]}>
            <img src={`images/image-product-${imageIndex + 1}.jpg`} />
          </div>

          <div className={styles["button-actions"]}>
            <button
              onClick={handlePreviousImage}
              className={`btn ${styles["btn-action"]} ${styles["btn-prev"]}`}
              aria-label="Previos product image">
              <img src="images/icon-previous.svg" />
            </button>
            <button
              onClick={handleNextImage}
              className={`btn ${styles["btn-action"]} ${styles["btn-next"]}`}
              aria-label="Next product image">
              <img src="images/icon-next.svg" />
            </button>
          </div>
        </div>

        <div className={styles["thumbnail-images"]}>
          {productThumbnailImages.map((thumbnail, index) => (
            <div
              onClick={() => setImageIndex(index)}
              key={thumbnail.id}
              className={styles["thumbnail-image"]}>
              <img
                className={imageIndex === index ? styles.active : ""}
                src={thumbnail.imageUrl}
                alt={thumbnail.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
};

export default ImageGalleryModal;
