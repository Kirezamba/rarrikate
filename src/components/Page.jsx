import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Card from "./card/Card";
import "./page.css";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}
