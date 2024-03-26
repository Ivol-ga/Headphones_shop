import React, { useContext, useState } from "react";
import deleteIcon from "../assets/icons/delete.svg";
import { GoodsCountContext } from "../context/app.Context";

function CartGoods({ picture, name, price, discount, description }) {
  const [counter, setCounter] = useState(1);
  const { cartCount } = useContext(GoodsCountContext);

  function handleIncrement() {
    setCounter((prevState) => prevState + 1);
  }
  function handleDecrement() {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  }
  return (
    <div className="cart__card">
      <div className="cart__image">
        <img src="https://i.postimg.cc/66vHBqP2/Image.png" alt={description} />
        <div className="cart__btns">
          <button
            className="button__decrement"
            disabled={counter === 1}
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="count"> {counter} </span>
          <button className="button__increment" onClick={handleIncrement}>
            +
          </button>
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
  );
}
export { CartGoods };
