import React, { useContext, useState } from "react";
import deleteIcon from "../assets/icons/delete.svg";
import { GoodsCountContext } from "../context/app.Context";

function CartGoods({
  picture,
  id,
  name,
  price,
  discount,
  description,
  count,
  handleDecrement,
  handleIncrement,
}) {
  // const [counter, setCounter] = useState(1);
  const { cartCount } = useContext(GoodsCountContext);

  return (
    <div className="cart__card">
      <div className="cart__image">
        <img src={picture} alt={description} />
        <div className="cart__btns">
          <button
            className="button__decrement"
            // disabled={count === 1}
            onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <span className="count"> {count} </span>
          <button
            className="button__increment"
            onClick={() => handleIncrement(id)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart__text-wrapper">
        <div className="cart__name">
          <p>{name}</p>
          {discount !== 0 ? (
            <span className="cart__price">{discount} ₽</span>
          ) : (
            <span className="cart__price">{price} ₽</span>
          )}
        </div>
      </div>
      <div className="cart__total">
        <a href="#" className="cart__delete-sticky">
          <img src={deleteIcon} alt="delete" />
        </a>
        {discount !== 0 ? (
          <span className="cart__price cart__price-black cart__price-sticky">
            {discount * count} ₽
          </span>
        ) : (
          <span className="cart__price cart__price-black cart__price-sticky">
            {price * count} ₽
          </span>
        )}
      </div>
    </div>
  );
}
export { CartGoods };
