import React from "react";
import { toast } from "react-toastify";

export default function OneCard({ arr, array, setarray }) {
  function hendelFun(arr, setarray, array) {
    let newarray = array.filter((arrs) => arrs.id !== arr.id);
    setarray(newarray);
    toast.error("Delete Successfuly");
  }
  return (
    <div className="">
      <div className="flex justify-between bg-gray-200 p-5 rounded-2xl my-3">
        <div className="first flex gap-3">
          <span className="h-10 w-10 inline-block rounded-full border-2 border-neutral-500 ">
            <span className="flex justify-center items-center   h-10">
              {arr.icon}
            </span>
          </span>
          <div className="text">
            <h1 className="font-semibold  text-[20px]"> {arr.name}</h1>
            <p>${arr.price}</p>
          </div>
        </div>
        <button
          className="btn btn-error"
          onClick={() => hendelFun(arr, setarray, array)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
