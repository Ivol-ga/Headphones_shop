import React from "react";
import telegram from "./img/telegram.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import lang from "./img/lang.png";

import { Logo } from "../../Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer  ">
      <div className=" container footer__border-top">
        <div className="container ">
          <div className="footer__wrapper">
            <div className="footer__col">
              <Logo />
            </div>
            <div className="footer__col">
              <nav className="menu-bottom">
                <Link to="/" className="menu-bottom__item">
                  Избранное
                </Link>
                <Link to="/" className="menu-bottom__item">
                  Корзина
                </Link>
                <Link to="/" className="menu-bottom__item">
                  Контакты
                </Link>
              </nav>
            </div>
            <div className="footer__col">
              <nav className="menu-bottom">
                <Link to="/" className="menu-bottom__item">
                  Условия сервиса
                </Link>
                <div className="menu__language">
                  <img
                    src={lang}
                    alt="language"
                    className="socials__icon earth"
                  />
                  <Link to="/" className="menu-bottom__item lang">
                    Рус
                  </Link>
                  <Link to="/" className="menu-bottom__item lang">
                    Eng
                  </Link>
                </div>
              </nav>
            </div>
            <div className="footer__col">
              <div className="contacts">
                <ul className="socials contacts__socials">
                  <li className="socials__item">
                    <Link to="https://vk.com/" className="socials__link">
                      <img
                        src={vk}
                        alt="vk"
                        target="_blank"
                        className="socials__icon"
                      />
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link to="https://t.me/Steel_al" className="socials__link">
                      <img
                        src={telegram}
                        alt="telegram"
                        className="socials__icon"
                        target="_blank"
                      />
                    </Link>
                  </li>
                  <li className="socials__item">
                    <Link
                      to="https://wa.me/12345678"
                      className="socials__link"
                      target="_blank"
                    >
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                        className="socials__icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
