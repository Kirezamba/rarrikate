import React from "react";
import inst from "../../assets/inst1.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="tg-chat">
          <p>Мой телеграм канал с полезностями:</p>
          <div className="tg-btn">
            <a href="https://t.me/deutscheposts">Присоединиться</a>
          </div>
        </div>

        <div className="contacts">
          <div className="inst">
            <a href="https://www.instagram.com/rarrikate/">
              <img src={inst} alt="instagram" />
            </a>
          </div>

          <div className="telegram">
            <a href="https://t.me/rarrikate">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/420774334587">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
