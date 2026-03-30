import React, { use } from "react";
import OneProduct from "./OneProduct";

export default function Prodects({ callapi, setarray, array }) {
  let useapi = use(callapi);

  return (
    <div className="lg:grid-cols-3 grid-cols-1 grid gap-5  mt-15 w-11/12 m-auto mb-20">
      {useapi.map((api) => (
        <OneProduct key={api.id} api={api} setarray={setarray} array={array} />
      ))}
    </div>
  );
}
