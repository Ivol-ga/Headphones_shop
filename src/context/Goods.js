import { createContext } from "react";

import dataWireless from "../data__wireless.json";
import dataHeadphones from "../data.json";

export const GoodsContext = createContext();

export const GoodsProvider = ({ children }) => {
  const allItems = [...dataWireless, ...dataHeadphones];

  const getItemsByIds = (ids) => {
    return allItems.filter((item) => ids.includes(item.id));
  };
  return (
    <GoodsContext.Provider
      value={{
        getItemsByIds,
        allItems,
      }}
    >
      {children}
    </GoodsContext.Provider>
  );
};
