import React from "react";

export default function Ready() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 mt-10">
      <div className="text text-center my-10">
        <h1 className="font-bold text-3xl mb-2">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-[#ddd">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
      </div>

      <div className="button flex gap-5 justify-center ">
        <a className="btn bg-white rounded-2xl px-8 py-5 font-bold  ">
          <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            Explore Products
          </p>
        </a>
        <a className="btn  border-2 border-base-100 bg-transparent  rounded-2xl px-8 py-5 font-bold text-white">
          View Pricing
        </a>
      </div>
      <p className="text-white text-center py-5">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
}
