import React from "react";
import TonConnectBtn from "./helpers/TonConnectBtn";
import BlumImage from "../assets/images/blum.png";
import TelegramImage from "../assets/images/telegram.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a
            href="https://t.me/blum/app?startapp=memepadjetton_YLLWBS_9Q1vg-ref_VwUUVyDLD8"
            className="header__blum"
            target="_blank"
          >
            <img src={BlumImage} alt="External Link" draggable="false"></img>
          </a>

          <TonConnectBtn />

          <a
            href="https://t.me/yellowboyscoin"
            className="header__tg"
            style={{ backgroundImage: `url(${TelegramImage})` }}
            target="_blank"
          ></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
