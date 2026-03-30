import React, { useState } from "react";

export default function Buttons({ sowInfo, setsowInfo }) {
  let [click, setclick] = useState("Products");
  return (
    <div>
      <div className="text text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Premium Digital Tools</h1>
        <p className="text-[#627382">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="tabss font-bold text-sky-400">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box bg-white   justify-center gap-3">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab w-40 rounded-3xl ${click === "Products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}  `}
            aria-label="Products"
            defaultChecked
            onClick={() => {
              setclick("Products");
              setsowInfo("Products");
            }}
          />
          <input
            type="radio"
            name="my_tabs_1 "
            className={`tab w-40 rounded-3xl ${click === "Cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}  `}
            aria-label="Cart (0)"
            onClick={() => {
              setclick("Cart");
              setsowInfo("Cart");
            }}
          />
        </div>
      </div>
    </div>
  );
}
