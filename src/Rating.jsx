import React from "react";

export default function Rating() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
      <div className="containers p-10 flex flex-col items-center lg:flex-row justify-center gap-9 lg:gap-20">
        <div className="child text-white">
          <h1 className="text-5xl font-bold">50k+</h1>
          <p className="text-xl font-medium">Active Users</p>
        </div>
        <div className="child text-white lg:border-x-2 lg:px-20">
          <h1 className="text-5xl font-bold">200k+</h1>
          <p className="text-xl font-medium">Premium Tools</p>
        </div>
        <div className="child text-white">
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
}
