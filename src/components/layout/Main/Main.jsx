import React from "react";
// import style from "../../../SASS/style.sass";
import { CardsHeadphones } from "../../CardsHeadphones";
import { CardsWireles } from "../../CardsWireless";
import { Cart } from "../../pages/Cart/Cart";

function Main() {
  return (
    <div className="wrapper">
      <div className={"content container"}>
        <h2 className="headphones__title title">Наушники</h2>
        <CardsHeadphones />
        <h2 className="wireless__title title">Беспроводные наушники</h2>
        <CardsWireles />
      </div>
    </div>
  );
}
export { Main };
