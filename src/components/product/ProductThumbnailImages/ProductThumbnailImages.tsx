import { useProductGallery } from "../../../hooks/useProductGallery";

import { productThumbnailImages } from "../../../utils";

import styles from "./ProductThumbnailImages.module.css";

type ThumbnailImageProps = {
  id: number;
  name: string;
  imageUrl: string;
};

const ThumbnailImage = ({ id, name, imageUrl }: ThumbnailImageProps) => {
  const { imageIndex, setImageIndex } = useProductGallery();

  return (
    <div
      className={`${styles["thumbnail-image-box"]} ${
        imageIndex + 1 === id ? `${styles["active"]}` : ""
      }`}
      onClick={() => setImageIndex(id - 1)}>
      <img className={styles["thumbnail-image"]} src={imageUrl} alt={name} />
    </div>
  );
};

const ProductThumbnailImages = () => {
  return (
    <div className={styles["thumbnail-images-container"]}>
      {productThumbnailImages.map((image) => (
        <ThumbnailImage key={image.id} {...image} />
      ))}
    </div>
  );
};

export default ProductThumbnailImages;
