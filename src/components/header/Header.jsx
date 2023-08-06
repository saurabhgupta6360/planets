import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" py-2 lg:bg-blk lg:w-full lg:sticky lg:z-10 lg:top-0 xs:bg-blk sm:bg-blk sm:w-full sm:sticky sm:z-10 sm:top-0 xs:w-full xs:sticky xs:z-10 xs:top-0 ">
      <div className="container flex items-center  justify-between mx-auto py-4 2xl:max-w-7xl xs:w-full xs:flex-wrap ">
        <div className="logo font-semibold text-lg text-white">
          <a href="/">The Solar System</a>
        </div>

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        {/* desktop menu */}
        <nav className="flex xs:hidden lg:block items-center w-auto">
          <div className=" justify-between text-base  text-gray-600">
            <a
              className=" ml-12 items-center hover:sepia	 justify-between text-white gap-y-8 py-2  font-normal uppercase tracking-wide"
              href="/"
            >
              Home
            </a>
            <a
              className=" ml-12 items-center hover:sepia justify-between gap-y-8  py-2 text-white font-normal uppercase tracking-wide"
              href="/planets"
            >
              Planets
            </a>
            <a
              className=" ml-12 items-center hover:sepia justify-between gap-y-8 py-2 text-white font-normal uppercase tracking-wide"
              href="/about"
            >
              About
            </a>
            <a
              className=" ml-12 items-center hover:sepia justify-between gap-y-8 py-2 text-white font-normal uppercase tracking-wide"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* mobile menu */}
        <nav
          className={`${
            open ? "block lg:hidden" : "hidden"
          }  w-full flex items-center  `}
        >
          <div className=" justify-between text-base  text-gray-600 xs:m-auto sm:m-auto md:m-auto ">
            <a
              className=" text-center justify-between text-white gap-y-8 py-2  font-normal uppercase tracking-wide block"
              href="/"
            >
              Home
            </a>
            <a
              className=" text-center justify-between gap-y-8  py-2 text-white font-normal uppercase tracking-wide block"
              href="/planets"
            >
              Planets
            </a>
            <a
              className=" text-center  justify-between gap-y-8 py-2 text-white font-normal uppercase tracking-wide block"
              href="/about"
            >
              About
            </a>
            <a
              className=" text-center  justify-between gap-y-8 py-2 text-white font-normal uppercase tracking-wide block"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
