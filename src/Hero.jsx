import { Star } from "lucide-react";
import React from "react";
import banner from "./assets/banner.png";
export default function Hero() {
  return (
    <div className="w-11/12 m-auto flex justify-between items-center my-5 flex-col lg:flex-row gap-7">
      <div className="text space-y-5  flex-1 order-2 lg:order-1 text-center lg:text-left">
        <div className="inline-flex justify-center items-center  rounded-2xl px-3 bg-amber-200">
          <div className="newbase inline-flex gap-2  p-2 rounded-2xl  ">
            <Star />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
        </div>
        <h1 className="text-5xl font-bold leading-[60px] ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-xl text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="button flex gap-5 justify-center lg:justify-start">
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl px-8 py-5 font-bold text-white">
            Explore Products
          </a>
          <a className="btn  border-2 border-[#9514FA]  rounded-2xl px-8 py-5 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Explore Products
          </a>
        </div>
      </div>
      <div className="img flex-1 flex justify-center lg:justify-end order-1 lg:order-2  ">
        <img
          className="lg:w-[80%]  w-[100%]   rounded-2xl  max-h-[70vh]"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
}
