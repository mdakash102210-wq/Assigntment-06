import { Check } from "lucide-react";
import React from "react";

export default function Price() {
  return (
    <div>
      <div className="text text-center my-10">
        <h1 className="font-bold text-3xl mb-2">Simple, Transparent Pricing</h1>
        <p className="text-[#627382">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 m-auto w-11/12">
        <div className="text-[#627382] border-neutral-content border-2 p-5 bg-[#6273821a] rounded-2xl  space-y-3 flex flex-col">
          <h1 className="font-bold text-2xl text-black">Starter</h1>
          <p>Perfect for getting started</p>
          <div className="pricing">
            <h1 className="text-4xl font-bold text-black">
              $0
              <span className="font-normal text-[16px] text-[#627382]">
                /Month
              </span>
            </h1>
          </div>
          <ul className="flex-1">
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Access to 10 free tools</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Basic templates</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Community support</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>1 project per month</p>
            </li>
          </ul>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-2xl text-white">
            Get Started Free
          </button>
        </div>

        <div className="text-[#627382] text-white border-neutral-content border-2 p-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl  space-y-3">
          <h1 className="font-bold text-2xl text-white">Pro</h1>
          <p>Best for professionals</p>
          <div className="pricing">
            <h1 className="text-4xl font-bold text-white">
              $29
              <span className="font-normal text-[16px] text-white">/Month</span>
            </h1>
          </div>
          <ul>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Access to 10 free tools</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Unlimited templates</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Unlimited projects</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Cloud sync</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Advanced analytics</p>
            </li>
          </ul>
          <button className="btn btn-base-100 w-full rounded-2xl text-white">
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Start Pro Trial
            </p>
          </button>
        </div>
        <div className="text-[#627382] border-neutral-content border-2 p-5 bg-[#6273821a] rounded-2xl  space-y-3">
          <h1 className="font-bold text-2xl text-black">Enterprise</h1>
          <p>For teams and businesses</p>
          <div className="pricing">
            <h1 className="text-4xl font-bold text-black">
              $99
              <span className="font-normal text-[16px] text-[#627382]">
                /Month
              </span>
            </h1>
          </div>
          <ul>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Everything in Pro</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Team collaboration</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Custom integrations</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Dedicated support</p>
            </li>
            <li className="flex gap-2 items-center">
              <Check className="text-green-400" />
              <p>Custom branding</p>
            </li>
          </ul>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-2xl text-white">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
