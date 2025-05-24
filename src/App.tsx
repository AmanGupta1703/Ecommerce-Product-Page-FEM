import { Layout, Header, ProductSection } from "./components/layout";

const App = () => {
  return (
    <Layout>
      <Header />

      <main className="main">
        <ProductSection />
      </main>
    </Layout>
  );
};

export default App;
