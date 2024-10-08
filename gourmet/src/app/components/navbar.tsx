import React from "react";
import Logo from "../assets/logo.svg";
import Gourmet from "../assets/Gourmet.svg";
import Cart from "../assets/cart.svg";
import Heart from "../assets/Heart.svg";
import Location from "../assets/Location.svg";
import Profile from "../assets/Profile.svg";
import Link from "next/link";

const Navbar = () => {
  
  return (
    <div className="bg-white flex flex-wrap items-center justify-between p-4  2xl:px-20 lg:px-4 lg:flex">
      <Link href={'/'}><div className="flex items-center gap-4 ">
        <img src={Logo.src}></img>
        <img src={Gourmet.src}></img>
      </div></Link>

      <form action="" className="w-[650px] md:w-[300px] lg:w-[400px] xl:w-[650px]">
        <div className="relative flex items-center  text-gray-400  mt-4 rounded-2xl focus-within:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-auto absolute ml-3  pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            name="search"
            placeholder="Hey, looking for something?"
            autoComplete="off"
            aria-label="Hey, looking for something?"
            className="w-full h-16 pr-3 pl-12 py-4 font-normal bg-gray-200 placeholder-gray-500 text-gray-700  rounded-2xl border-none text-2xl "
          />
        </div>
      </form>

      {/* Additional content for the right side of the navbar */}
      <div className="flex ">
        <img src={Cart.src} className="mr-12" />
        <img src={Heart.src} className="mr-12" />
        <img src={Profile.src} className="mr-12" />
        <img src={Location.src} className="mr-12" />
      </div>
    </div>
  );
};

export default Navbar;
