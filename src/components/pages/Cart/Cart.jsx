import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { CartGoods } from "../../CartGoods";
// import { GoodsContext } from "../../../context/Goods";

function Cart() {
  const { cartGoods, setCartCount, setCartGoods } = useContext(CartContext);
  // const { allItems } = useContext(GoodsContext);

  const navigate = useNavigate();

  const [totalSum, setTotalSum] = useState(
    cartGoods.reduce((prev, curr) => prev + curr.price, 0)
  );

  function handleIncrement(id) {
    const newCartGoods = cartGoods.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: ++product.count,
        };
      }
      return product;
    });
    setCartGoods(newCartGoods);
    setTotalSum(
      newCartGoods.reduce((prev, curr) => prev + curr.price * curr.count, 0)
    );
  }

  function handleDecrement(id) {
    const newCartGoods = cartGoods.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: --product.count,
        };
      }
      return product;
    });
    setCartGoods(newCartGoods);
    setTotalSum(
      newCartGoods.reduce((prev, curr) => prev + curr.price * curr.count, 0)
    );
  }
  function handleDeleteProduct(id) {
    const newValueCatrGoods = cartGoods.filter((item) => item.id !== id);
    setCartGoods(newValueCatrGoods);
    setCartCount((prev) => prev - 1);
    setTotalSum(
      newValueCatrGoods.reduce(
        (prev, curr) => prev + curr.price * curr.count,
        0
      )
    );
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
              {cartGoods.map((dataItem) => {
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
                  {totalSum}
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
