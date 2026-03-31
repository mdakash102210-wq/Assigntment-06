import React from "react";
import OneCard from "./OneCard";
import { toast } from "react-toastify";

export default function Card({ array, setarray }) {
  function Chekout() {
    setarray([]);
    toast.success("Proceed To Chekout Complate");
  }
  let pricesh = array.reduce((sum, user) => sum + user.price, 0);
  let toFixed = pricesh.toFixed(2);
  return array.length <= 0 ? (
    <div className="text-center p-20 border-2 border-neutral-400 rounded-2xl w-11/12 m-auto my-10">
      <h1 className="font-bold text-3xl mb-3">Your Card is Emtry</h1>
      <p>Place select Card</p>
    </div>
  ) : (
    <div className="w-11/12  m-auto">
      <div>
        <h1 className="font-bold text-2xl mt-10">Your Cart</h1>
      </div>
      {array.map((arr) => (
        <OneCard key={arr.id} arr={arr} array={array} setarray={setarray} />
      ))}

      <div className="flex justify-between mt-10 text-2xl font-bold">
        <p className="text-xl">Total Price</p>
        <p>${toFixed}</p>
      </div>
      <div>
        <button
          className="btn btn-primary w-full rounded-2xl my-4"
          onClick={() => Chekout()}
        >
          Proceed To Chekout
        </button>
      </div>
    </div>
  );
}
