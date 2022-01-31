import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="hello__block">
        <header className="header">
          <div className="header__logo">arrikate</div>
        </header>
        <div className="text__p">
          <div className="welcome-text">
            <p>
              Привет! Рада видеть тебя на своей страничке 🥰 Меня зовут Катя, и я преподаю немецкий
              язык уже 5 лет!
            </p>
            <p>
              Здесь ты найдёшь подробное описание всех моих продуктов и сможешь выбрать тот, что
              подходит именно тебе! Если у тебя есть вопросы — пиши мне, и я с удовольствием отвечу
              на них ✨
            </p>
          </div>
          <div className="btn">
            <a href="https://www.instagram.com/rarrikate/">Напиши мне</a>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
}
