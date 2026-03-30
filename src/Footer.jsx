import { Link } from "lucide-react";
import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="text grid lg:grid-cols-6 grid-rows-2 gap-5 w-11/12 m-auto pt-20 pb-3 border-b-2 border-neutral-content text-gray-400">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-3 ">DifiTools</h1>
          <p className="leading-7">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div>
          <ul className=" space-y-2">
            <li className="font-bold text-xl">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <ul className=" space-y-2">
            <li className="font-bold text-xl">Company</li>

            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <ul className=" space-y-2">
            <li className="font-bold text-xl">Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-xl">Social Links</h1>
          <div className="flex  gap-3">
            <div className="bg-white   rounded-full border border-gray-300">
              <FaInstagram size={40} className="p-1 text-black" />
            </div>
            <div className="bg-white   rounded-full border border-gray-300">
              <CiFacebook size={40} className="p-1 text-black" />
            </div>
            <div className="bg-white   rounded-full border border-gray-300">
              <CiTwitter size={40} className="p-1 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col lg:flex-row justify-between py-5 opacity-50 w-11/12 m-auto">
        <div className="text">
          <p className="">© 2026 Digitools. All rights reserved.</p>
        </div>
        <ul className="flex gap-3">
          <li>Privacy Policy </li>
          <li>Terms of Service </li>
          <li>Cookies </li>
        </ul>
      </div>
    </div>
  );
}
