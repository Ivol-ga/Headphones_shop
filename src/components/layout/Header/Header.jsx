import React from "react";
import heart from "../../../assets/icons/Heart.svg";
import cart from "../../../assets/icons/Cart.svg";
import { Logo } from "../../Logo";
import { useContext } from "react";
import { GoodsCountContext } from "../../../context/app.Context";
import { Link } from "react-router-dom";

function Header() {
  const { cartCount } = useContext(GoodsCountContext);

  return (
    <div className={"header header-wrapper"}>
      <div className="container header__menu">
        <Logo />
        <div className="header__icons">
          <a href="/" className="icon__favourite icon">
            <span className="icon__count">2</span>
            <img src={heart} alt="favourite" />
          </a>
          <Link to="cart" className="icon__cart icon">
            <span className="icon__count">{cartCount.length}</span>
            <img src={cart} alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export { Header };
