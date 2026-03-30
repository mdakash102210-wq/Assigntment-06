import { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Card from "./Card";
import Hero from "./Hero";
import Nav from "./Nav";
import Prodects from "./Prodects";
import Rating from "./Rating";
import Stars from "./Stars";
import Price from "./Price";
import Ready from "./assets/Ready";

function App() {
  let [sowInfo, setsowInfo] = useState("Products");
  return (
    <>
      <Nav />
      <Hero />
      <Rating />
      <Buttons sowInfo={sowInfo} setsowInfo={setsowInfo} />
      {sowInfo === "Products" ? <Prodects /> : <Card />}
      <Stars />
      <Price />
      <Ready />
    </>
  );
}

export default App;
