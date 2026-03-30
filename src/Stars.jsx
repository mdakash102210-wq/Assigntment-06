import React from "react";
import User from "./assets/user.png";
import Package from "./assets/package.png";
// import Roket from "./assets/roket.png";
import Roket from "./assets/rocket.png";
export default function Stars() {
  return (
    <div>
      <div className="text text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Get Started in 3 Steps</h1>
        <p className="text-[#627382">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="my-10 w-11/12 m-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100  shadow-sm">
          <div className="card-body">
            <div className="flex justify-end">
              <p className="bg-sky-500 max-w-8 h-8 inline-flex p-3 rounded-full justify-center items-center font-bold text-white">
                1
              </p>
            </div>
            <div className="img flex justify-center  p-5 rounded-full">
              <div className="bg-[#9614fa38] rounded-full p-5 w-20 h-20">
                <img className="" src={User} alt="" srcset="" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">Create Account</h2>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <div className="card-body">
            <div className="flex justify-end">
              <p className="bg-sky-500 max-w-8 h-8 inline-flex p-3 rounded-full justify-center items-center font-bold text-white">
                2
              </p>
            </div>
            <div className="img flex justify-center  p-5 rounded-full">
              <div className="bg-[#9614fa38] rounded-full p-5 w-20 h-20">
                <img className="" src={Package} alt="" srcset="" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">Create Account</h2>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <div className="card-body">
            <div className="flex justify-end">
              <p className="bg-sky-500 max-w-8 h-8 inline-flex p-3 rounded-full justify-center items-center font-bold text-white">
                3
              </p>
            </div>
            <div className="img flex justify-center  p-5 rounded-full">
              <div className="bg-[#9614fa38] rounded-full p-5 w-20 h-20">
                <img className="" src={Roket} alt="" srcset="" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">Create Account</h2>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
