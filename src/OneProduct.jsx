import { library } from "@fortawesome/fontawesome-svg-core";
import { Check } from "lucide-react";
import React, { useState } from "react";

export default function OneProduct({ api }) {
  let [btnclick, setbtnclick] = useState(false);

  function btnhendel(api) {
    setbtnclick(!btnclick);
    console.log(api);
  }
  return (
    <div className=" m-auto  border-2 border-neutral-content flex flex-col p-5 rounded-2xl space-y-3 text-gray-600  ">
      <div className="div relative ">
        <div className="  ">
          <span className="h-10 w-10 inline-block rounded-full border-2 border-neutral-500 ">
            <span className="flex justify-center items-center   h-10">
              {api.icon}
            </span>
          </span>
        </div>
        <div
          className={`base capitalize inline p-1 rounded-xl px-4 absolute -top-4 right-0 ${
            api.tag === "free"
              ? "bg-green-500"
              : api.tag === "new"
                ? "bg-amber-500"
                : api.tag === "popular"
                  ? "bg-fuchsia-300"
                  : api.tag === "best seller"
                    ? "bg-red-400"
                    : api.tag === "best value"
                      ? "bg-sky-500"
                      : "bg-amber-600"
          }`}
        >
          {api.tag}
        </div>
      </div>
      <h1 className="font-bold text-2xl text-black">{api.name}</h1>
      <p>{api.description}</p>
      <h1 className="font-bold text-2xl text-black">
        {api.price}/{" "}
        <span className="font-normal text-[16px] text-gray-600">
          {api.period}
        </span>
      </h1>
      <ul className="flex-1">
        {api.features.slice(0, 5).map((feature, index) => (
          <li className="flex gap-2" key={index}>
            <span>
              <Check className="text-green-500" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`btn  ${btnclick === false ? "btn-primary" : "btn-secondary"} w-full`}
        onClick={() => btnhendel(api)}
      >
        {btnclick === false ? "Buy Now" : "Selected"}
      </button>
    </div>
  );
}
