import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import Product from "./pages/product/product";
import Header from "./components/header/header";
import Basket from "./pages/basket/basket";
import { BasketProvider } from "./contexts/basket.context";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BasketProvider>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<Product />} path="/products/:productId" />
      </Routes>
      <Footer />
    </BasketProvider>
  );
}

export default App;
