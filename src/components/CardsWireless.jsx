import React from "react";
// import style from "../../../SASS/style.sass";
import { Card } from "./Card";
import dataWireless from "../data__wireless.json";

function CardsWireles() {
  return (
    <div className="cards">
      {dataWireless.map((dataItem) => {
        return <Card key={dataItem.id} {...dataItem} />;
      })}
    </div>
  );
}
export { CardsWireles };
