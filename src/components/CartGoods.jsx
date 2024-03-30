import React from "react";
import deleteIcon from "../assets/icons/delete.svg";

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
  handleDeleteProduct,
}) {
  return (
    <div className="cart__card">
      <div className="cart__image">
        <img src={picture} alt={description} />
        <div className="cart__btns">
          <button
            className="button__decrement"
            disabled={count === 1}
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
        <button
          className="cart__delete-sticky"
          onClick={() => handleDeleteProduct(id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
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
