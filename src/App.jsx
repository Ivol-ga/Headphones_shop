import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { Cart } from "./components/pages/Cart/Cart.jsx";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { Spinner } from "./components/Spinner.jsx";
import { AppContext } from "./context/app.Context.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cartCount, setCartCount] = useState([]);

  const addProduct = () => {
    //   // setProductsSum((productsSum) => productsSum + parseInt(price));
    setCartCount((countsSum) => countsSum + 1);
  };

  function handleCountCarts(id) {
    return console.log(id);
  }
  function handleCartClick(id) {
    return console.log(setCartCount(handleCountCarts(id)));
  }

  return (
    <AppContext.Provider value={{ cartCount, handleCountCarts, isLoading }}>
      <Header
        cartCount={cartCount}
        handleClick={() => addProduct()}
        handleCartClick={handleCartClick}
      />
      {isLoading && <Spinner />}
      <Routes>
        <Route path="/" element={<Main isLoading={isLoading} />} />
        <Route
          path="/cart"
          element={
            <Cart
              isLoading={isLoading}
              handleClick={() => addProduct()}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route path="*" element={<NotFound isLoading={isLoading} />} />
      </Routes>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
