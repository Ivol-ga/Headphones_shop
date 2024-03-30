import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { Cart } from "./components/pages/Cart/Cart.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Spinner } from "./components/Spinner.jsx";
import { CartContextProvider } from "./context/CartContext.js";
import { GoodsProvider } from "./context/Goods.js";

function App() {
  const [isLoading] = useState(false);

  return (
    <GoodsProvider>
      <CartContextProvider>
        <Header />
        {isLoading && <Spinner />}
        <Routes>
          <Route path="/" element={<Main isLoading={isLoading} />} />
          <Route path="/cart" element={<Cart isLoading={isLoading} />} />
          <Route path="*" element={<NotFound isLoading={isLoading} />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </GoodsProvider>
  );
}

export default App;
