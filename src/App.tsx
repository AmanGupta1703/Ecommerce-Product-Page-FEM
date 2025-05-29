import { Layout, Header, ProductSection } from "./components/layout";

import CartContextProvider from "./contexts/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Layout>
        <Header />

        <main className="main">
          <ProductSection />
        </main>
      </Layout>
    </CartContextProvider>
  );
};

export default App;
