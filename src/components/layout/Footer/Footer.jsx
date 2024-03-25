import React from "react";
import telegram from "./img/telegram.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import lang from "./img/lang.png";

import { Logo } from "../../Logo";

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
                <a href="/catalogue" className="menu-bottom__item">
                  Избранное
                </a>
                <a href="/catalogue" className="menu-bottom__item">
                  Корзина
                </a>
                <a href="/catalogue" className="menu-bottom__item">
                  Контакты
                </a>
              </nav>
            </div>
            <div className="footer__col">
              <nav className="menu-bottom">
                <a href="/catalogue" className="menu-bottom__item">
                  Условия сервиса
                </a>
                <div className="menu__language">
                  <img
                    src={lang}
                    alt="language"
                    className="socials__icon earth"
                  />
                  <a href="/catalogue" className="menu-bottom__item lang">
                    Рус
                  </a>
                  <a href="/catalogue" className="menu-bottom__item lang">
                    Eng
                  </a>
                </div>
              </nav>
            </div>
            <div className="footer__col">
              <div className="contacts">
                <ul className="socials contacts__socials">
                  <li className="socials__item">
                    <a className="socials__link" href="https://vk.com/">
                      <img src={vk} alt="vk" className="socials__icon" />
                    </a>
                  </li>
                  <li className="socials__item">
                    <a className="socials__link" href="https://telegram.org/">
                      <img
                        src={telegram}
                        alt="telegram"
                        className="socials__icon"
                      />
                    </a>
                  </li>
                  <li className="socials__item">
                    <a
                      className="socials__link"
                      href="https://www.whatsapp.com/?lang=ru_RU"
                    >
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                        className="socials__icon"
                      />
                    </a>
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
