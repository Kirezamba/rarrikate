import React from "react";

export default function List({ data }) {
  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <li key={item._id} className="list-item">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
