import React from "react";
import "./card.css";
import List from "./list/List";
import { items as data } from "../../data/db";
import Tariff from "./tariff/Tariff";

export default function Card() {
  return (
    <>
      {Object.keys(data).map((item) => (
        <div className="container-card" key={data[item]._id}>
          <div className="card">
            <div className="box">
              <div className="content">
                <div className="card-content">
                  <div className="title">
                    <h3>{data[item].title}</h3>
                  </div>
                  <div className="card-item">
                    {data[item].forWho.length > 0 ? <h4>Это подойдёт тебе, если:</h4> : ""}
                    <List data={data[item].forWho} />
                  </div>
                  <div className="card-item">
                    {data[item].howGoes.length > 0 ? <h4>Как проходят занятия:</h4> : ""}
                    <List data={data[item].howGoes} />
                  </div>
                  <div className="card-item">
                    {data[item].whatReceive.length > 0 ? <h4>Что ты получишь в итоге:</h4> : ""}
                    <List data={data[item].whatReceive} />
                  </div>
                </div>
                <div className="tariff">
                  {data[item].tariffs.length > 1 ? <h4>Тарифы:</h4> : <h4>Стоимость:</h4>}
                  <Tariff data={data[item].tariffs} />
                </div>
                <div className="btn">
                  <a href="https://www.instagram.com/rarrikate/">Хочу!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
