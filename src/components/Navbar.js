import React, { useState } from "react";
import Logo from "../assests/images/logo.png";
import Profile from "../assests/images/profile.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" bg-[#FFFFFF]">
      <nav className=" shadow-md ">
        <div className="  px-2 sm:px-6 lg:px-[30px] ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button className="z-20" type="button" onClick={toggleNav}>
                {nav ? (
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={Logo} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex text-[#000000] text-[16px] font-[500] space-x-[36px] md:pl-[90px] lg:pl-[171px]">
                  <a href="/" className="" aria-current="page">
                    DASHBOARD
                  </a>
                  <a href="/" className="">
                    PACKAGES
                  </a>
                  <a href="/" className="">
                    EVENTS
                  </a>
                  <a href="/" className="">
                    BLOGS
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className=" flex rounded-full"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img className="h-8 w-8 rounded-full" src={Profile} alt="" />
              </button>
            </div>
          </div>
        </div>
        {nav && (
          <div className="sm:hidden absolute top-0 bottom-0 right-0 left-0 bg-slate-400 z-10">
            <div className="space-y-1 px-2 pb-3 pt-20">
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Packages
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Events
              </a>
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Blogs
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
