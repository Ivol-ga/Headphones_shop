import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoodsCountContext } from "../../../context/app.Context";
// import { GoodsProvider } from "../../../context/Goods";
import { CartGoods } from "../../CartGoods";
import dataHeadphones from "../../../data.json";
import dataWireless from "../../../data__wireless.json";

function Cart() {
  const { cartCount } = useContext(GoodsCountContext);
  // const getItemsByIds = useContext(GoodsProvider);

  // const cartGoods = allGoods.filter((good) => cartCount.includes(good.id));
  // const cardsGoods = getItemsByIds(cartCount);

  const allGoods = [...dataWireless, ...dataHeadphones];
  const cartGoodsIds = allGoods.filter((good) =>
    cartCount.includes(good.id)
  ); /*массив товаров в корзине по айди*/

  const navigate = useNavigate();

  const [cart, setCart] = useState(cartGoodsIds);
  console.log(cart);

  // const cardsGoods = getItemsByIds(cartCount);

  const [totalSum, setTotalSum] = useState({
    price: cart.reduce((prev, curr) => prev + curr.price, 0),
  });

  useEffect(() => {
    setTotalSum({
      price: cart.reduce((prev, curr) => prev + curr.price, 0),
    });
  }, [cart]);

  function handleIncrement(id) {
    setCart(
      cartGoodsIds.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
          };
        }
        return product;
      })
    );
  }

  function handleDecrement(id) {
    setCart(
      cartGoodsIds.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: --product.count,
          };
        }
        return product;
      })
    );
  }
  function handleDeleteProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

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
            <div className="cart__goods">
              {cartGoodsIds.map((dataItem) => {
                return (
                  <CartGoods
                    key={dataItem.id}
                    {...dataItem}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleDeleteProduct={handleDeleteProduct}
                  />
                );
              })}
            </div>
            <div className="cart__summary">
              <div className="cart__summary-wrapper">
                <div className="cart__summary_text cart__price cart__price-black">
                  ИТОГО:
                </div>
                <div className="cart__summary_price cart__price cart__price-black">
                  {totalSum.price}
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
