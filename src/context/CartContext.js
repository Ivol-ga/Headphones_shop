import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartGoods, setCartGoods] = useState([]);

  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, cartGoods, setCartGoods }}
    >
      {children}
    </CartContext.Provider>
  );
};
