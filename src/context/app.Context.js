import React from "react";
export const AppContext = React.createContext({
  cartCount: [],
  handleCountCarts: () => {},
  isLoading: false,
});
AppContext.displayName = "AppContext";
