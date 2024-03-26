import { createContext, useState } from "react";

import dataWireless from "../data__wireless.json";
import dataHeadphones from "../data.json";

const GoodsContext = createContext();

export const GoodsProvider = ({ children }) => {
  const allItems = [...dataWireless, ...dataHeadphones];
  const [allGoods, setAllGoods] = useState([]);

  const getItemsByIds = (ids) => {
    return setAllGoods(allItems.filter((item) => ids.includes(item.id)));
  };

  return (
    <GoodsContext.Provider
      value={{
        dataWireless,
        dataHeadphones,
        allItems,
        setAllGoods,
        allGoods,
        getItemsByIds,
      }}
    >
      {children}
    </GoodsContext.Provider>
  );
};
