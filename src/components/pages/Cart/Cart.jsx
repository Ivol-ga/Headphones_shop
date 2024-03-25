import React from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteIcon from "./img/delete.svg";

function Cart(picture, name, price, discount, description) {
  const navigate = useNavigate();
  function handleClickBack() {
    navigate(-1);
  }

  function handleIncrement() {}
  function handleDecrement() {}

  return (
    <>
      <div className="cart wrapper">
        <div className="content container ">
          <a href="/" className="button__back" onClick={handleClickBack}>
            Назад
          </a>
          <h2 className={"cart__title title"}>Корзина</h2>
          <div className="cart__wrapper">
            <div className="cart__card">
              <div className="cart__image">
                <img
                  src="https://i.postimg.cc/66vHBqP2/Image.png"
                  alt={description}
                />
                <div className="cart__btns">
                  <button className="button__decrement">-</button>
                  <span className="count"> 1 </span>
                  <button className="button__increment">+</button>
                </div>
              </div>
              <div className="cart__text-wrapper">
                <div className="cart__name">
                  <p>Apple BYZ S852I</p>
                  <div className="cart__price">2927 ₽</div>
                </div>
              </div>
              <div className="cart__total">
                <a href="#" className="cart__delete-sticky">
                  <img src={deleteIcon} alt="delete" />
                </a>
                <div className="cart__price cart__price-black cart__price-sticky">
                  2927 ₽
                </div>
              </div>
            </div>
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
