import React from "react";
import Logo from "../assets/logo.svg";
import Gourmet from "../assets/Gourmet.svg";
import Cart from "../assets/cart.svg";
import Heart from "../assets/Heart.svg";
import Location from "../assets/Location.svg";
import Profile from "../assets/Profile.svg";

const Navbar = () => {
  return (
    <div className="bg-white flex flex-wrap items-center justify-between p-4">
      <div className="flex items-center">
        <img src={Logo.src} className="mx-3"></img>
        <img src={Gourmet.src}></img>
      </div>




<form action="" className="w-screen  max-w-2xl">
      <div className="relative flex items-center text-gray-400 focus-within:text-gray-700">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute ml-3 pointer-events-none"
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
          placeholder="Search talk"
          autoComplete="off"
          aria-label="Search talk"
          className="w-full pr-3 pl-10 py-3 font-semibold bg-gray-200 placeholder-gray-500 text-gray-700  rounded-2xl border-none "
        />
      </div>
    </form>

      {/* Additional content for the right side of the navbar */}
      <div className="flex">

      <img src={Cart.src} className="mr-12"/>
      <img src={Heart.src} className="mr-12"/>
      <img src={Profile.src} className="mr-12"/>
       <img src={Location.src} className="mr-12"/>
      </div>
    </div>
  );
};

export default Navbar;
