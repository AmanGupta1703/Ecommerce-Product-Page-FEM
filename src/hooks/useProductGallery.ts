import { useContext } from "react";

import { ProductGalleryContext } from "../contexts/ProductGalleryContext";

export function useProductGallery() {
  const context = useContext(ProductGalleryContext);
  if (!context) {
    throw new Error("useProductGallery must be used within a ProductGalleryProvider");
  }
  return context;
}
