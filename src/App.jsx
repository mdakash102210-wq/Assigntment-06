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
import Footer from "./Footer";

let Apidata = async () => {
  let res = await fetch("Api.json");
  let result = await res.json();
  return result;
};
let callapi = Apidata();

function App() {
  let [sowInfo, setsowInfo] = useState("Products");
  return (
    <>
      <Nav />
      <Hero />
      <Rating />
      <Buttons sowInfo={sowInfo} setsowInfo={setsowInfo} />
      {sowInfo === "Products" ? <Prodects callapi={callapi} /> : <Card />}
      <Stars />
      <Price />
      <Ready />
      <Footer />
    </>
  );
}

export default App;
