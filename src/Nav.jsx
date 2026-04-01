import { CircleX, Menu, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

export default function Nav({ array }) {
  let [btnclick, setbtnclick] = useState(false);
  // console.log(btnclick);
  return (
    <div className="w-11/12 m-auto sticky top-0 z-1">
      <div className="navbar bg-base-100">
        <div className="navbar-start" onClick={() => setbtnclick(!btnclick)}>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {btnclick ? <CircleX /> : <Menu />}
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  gap-5">
          <div className="card relative">
            <ShoppingCart />
            <div
              className={`${array.length <= 0 && "hidden"} absolute -top-3 left-4`}
            >
              <p
                className={`inline-block p-1 rounded-full h-7 w-7 bg-red-500 `}
              >
                <span className="flex justify-center  items-center text-white">
                  {array.length}
                </span>
              </p>
            </div>
          </div>
          <div className="login">
            <a className="font-semibold" href="">
              Login
            </a>
          </div>
          <div className="button hidden md:block">
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl px-8 font-bold text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
