import React from "react";
import "./tariff.css";
export default function Tariff({ data }) {
  console.log(data);
  return (
    <>
      <div className="price">
        {data.map((item) => (
          <div key={item._id} className="price-item">
            <div>{item.name}</div> <div>{item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
