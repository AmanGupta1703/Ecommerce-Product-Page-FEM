import { createContext, useCallback, useMemo, useState } from "react";

type TProductGalleryProviderProps = {
  children: React.ReactNode;
  images: Array<{
    id: number;
    name: string;
    imageUrl: string;
  }>;
};

type TProductGallertContext = {
  showLightbox: boolean;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  handleLightboxToggle: () => void;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
};

// ---

export const ProductGalleryContext = createContext<TProductGallertContext | undefined>(undefined);

const ProductGalleryProvider = ({ children, images }: TProductGalleryProviderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleNextImage = useCallback(() => {
    setImageIndex((prevImageIndex) =>
      images.length - 1 === prevImageIndex ? 0 : prevImageIndex + 1,
    );
  }, [imageIndex]);

  const handlePreviousImage = useCallback(() => {
    setImageIndex((prevImageIndex) =>
      prevImageIndex === 0 ? images.length - 1 : prevImageIndex - 1,
    );
  }, [imageIndex]);

  const handleLightboxToggle = useCallback(() => {
    setShowLightbox((prevShowLightbox) => !prevShowLightbox);
  }, [showLightbox]);

  const value = useMemo(
    () => ({
      imageIndex,
      handleNextImage,
      handlePreviousImage,
      setImageIndex,
      showLightbox,
      handleLightboxToggle,
    }),
    [
      imageIndex,
      handleNextImage,
      handlePreviousImage,
      setImageIndex,
      showLightbox,
      handleLightboxToggle,
    ],
  );

  return <ProductGalleryContext.Provider value={value}>{children}</ProductGalleryContext.Provider>;
};

export default ProductGalleryProvider;
