import React, { useState } from "react";
// export const AppContext = React.createContext({
//   cartCount: [],
//   handleCountCarts: () => {},
//   isLoading: false,
// });
// AppContext.displayName = "AppContext";

export const GoodsCountContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartCount, setCartCount] = useState([]);

  return (
    <GoodsCountContext.Provider value={{ cartCount, setCartCount, isLoading }}>
      {children}
    </GoodsCountContext.Provider>
  );
};
