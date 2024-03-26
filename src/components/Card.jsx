import React, { useContext } from "react";
import starpic from "../assets/img/star.png";
import { GoodsCountContext } from "../context/app.Context";

function Card({ id, picture, description, price, name, star, discount }) {
  const { handleCountCarts } = useContext(GoodsCountContext);
  const { cartCount } = useContext(GoodsCountContext);
  const count = useContext(cartCount);

  function handleCartClick() {
    return cartCount.push(handleCountCarts(id));
  }

  return (
    <div className="card">
      <div className="card__image">
        <img src={picture} alt={description} />
      </div>

      <div className="card__desc">
        <div className="card__desc-left">
          <p className="card__name">{name}</p>
          <div className="card__star">
            <img src={starpic} alt="star" className="star"></img>
            {star}
          </div>
        </div>
        <div className="card__desc-right">
          {discount !== 0 && <span className="card__old-price">{price} ₽</span>}
          {discount !== 0 ? (
            <span className="card__price">{discount} ₽</span>
          ) : (
            <span className="card__price">{price} ₽</span>
          )}
          <button className="card__btn" onClick={handleCartClick}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
export { Card };
