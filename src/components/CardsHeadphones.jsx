import React from "react";
// import style from "../../../SASS/style.sass";
import { Card } from "./Card";
import jsonData from "../data.json";

function CardsHeadphones() {
  return (
    <div className="cards">
      {jsonData.map((dataItem) => {
        return <Card key={dataItem.id} {...dataItem} />;
      })}
    </div>
  );
}
export { CardsHeadphones };
