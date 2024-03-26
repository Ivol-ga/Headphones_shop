import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoodsCountContext } from "../../../context/app.Context";
import { GoodsProvider } from "../../../context/Goods";
import { CartGoods } from "../../CartGoods";

function Cart() {
  const { cartCount } = useContext(GoodsCountContext);
  const allGoods = useContext(GoodsProvider);

  // function useGoodsContext() {
  //   const allGoods = useContext(GoodsProvider);
  //   if (allGoods === undefined) {
  //     throw new Error("useCount must be used within a CountProvider");
  //   }
  //   return allGoods;
  // }
  // useGoodsContext();

  // const cartGoods = allGoods.filter((good) => cartCount.includes(good.id));
  // const cardsGoods = getItemsByIds(cartCount);

  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  function handleClickBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="cart wrapper">
        <div className="content container ">
          <a href="/" className="button__back" onClick={handleClickBack}>
            Назад
          </a>
          <h2 className={"cart__title title"}>Корзина</h2>
          <div className="cart__wrapper">
            <CartGoods
            //  {allGoods.map((goodItem) => {
            //   return <CartGoods key={goodItem.id} {...goodItem} />;
            // })}
            />
            <div className="cart__summary">
              <div className="cart__summary-wrapper">
                <div className="cart__summary_text cart__price cart__price-black">
                  ИТОГО
                </div>
                <div className="cart__summary_price cart__price cart__price-black">
                  ₽ 2927
                </div>
              </div>
              <Link to={"/"} className="btn">
                Перейти к оформлению
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Cart };
