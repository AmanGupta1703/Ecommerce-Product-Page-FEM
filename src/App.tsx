import { Layout, Header, ProductSection } from "./components/layout";
import { ImageGalleryModal } from "./components/product";

import CartContextProvider from "./contexts/CartContext";
import ProductGalleryProvider from "./contexts/ProductGalleryContext";

import { productImages } from "./utils";

const App = () => {
  return (
    <CartContextProvider>
      <ProductGalleryProvider images={productImages}>
        <Layout>
          <Header />

          <main className="main">
            <ProductSection />
          </main>
        </Layout>

        <ImageGalleryModal />
      </ProductGalleryProvider>
    </CartContextProvider>
  );
};

export default App;
