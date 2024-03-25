import React, { useContext } from "react";
import starpic from "../assets/img/star.png";
import { AppContext } from "../context/app.Context";

function Card({ id, picture, description, price, name, star, discount }) {
  const { handleCountCarts } = useContext(AppContext);
  const { cartCount } = useContext(AppContext);
  const count = useContext(cartCount);

  function handleCartClick() {
    return console.log(cartCount.push(handleCountCarts(id)));
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
          <a
            href="#"
            className="card__cart  btn_type_primary"
            onClick={handleCartClick}
          >
            Купить
          </a>
        </div>
      </div>
    </div>
  );
}
export { Card };
