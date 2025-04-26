import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Sidemenu from "./Sidemenu";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Header() {
  const [searchIcon, setSearchIcon] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const popularBrands = [
    "Optimum Nutrition (ON)",
    "MuscleBlaze",
    "MyProtein",
    "BSN",
    "Dymatize",
    "Isopure",
    "MuscleTech",
    "Labrada",
    "GNC",
    "Fast&Up",
    "MyFitFuel",
    "GNC",
    "MuscleTech",
    "MyProtein",
    "Avvatar",
    "As It Is",
    "The Whole Truth",
    "MuscleBlaze",
    "MyProtein",
    "Dymatize",
    "Isopure",
    "MuscleTech",
    "Labrada",
    "GNC",
    "Fast&Up",
    "MyFitFuel",
    "Myprotein",
    "Orgain",
    "Ensure",
    "Cellucor",
  ];

  const navItems = [
    "Brands",
    "Sports Nutrition",
    "Vitamins & Supplements",
    "Health Foods & Drinks",
    "Fitness Accessories & Equipments",
  ];

  return (
    <div>
      <nav className=" bg-customBlue text-white">
        <div className="flex items-center justify-between mx-[5vw] p-3 md:p-4">
          <div>
            <div className="cursor-pointer">
              <img
                src="https://dailypunchnutrition.com/images/logo.png"
                className="w-[20vw] md:w-[10vw] h-auto p-1 "
                alt=""
              />
            </div>
          </div>
          <div className="md:block hidden">
            <input
              type="text"
              placeholder="Hello Doston"
              className="focus:outline-none border border-gray-300 rounded-sm w-[32vw] py-2 px-4 bg-white placeholder:text-gray-500 text-customBlue font-semibold"
            />
          </div>
          <div>
            <ul className="md:flex hidden space-x-10">
              <li className="font-bold inline-flex text-[1.3vw] cursor-pointer">
                <FaUserCircle className="mt-[0.37vw] mr-2" /> Login/Signup
              </li>
              <li className="font-bold inline-flex text-[1.3vw] cursor-pointer border-red-600 rounded-sm ">
                <FaShoppingCart className="mt-[0.37vw] mr-2" /> Cart
              </li>
            </ul>
            <div className="md:hidden flex space-x-10">
              <FaMagnifyingGlass
                className="text-xl cursor-pointer"
                onClick={() => setSearchIcon((prev) => !prev)}
              />
              {hamburger ? (
                <IoClose
                  className="text-xl cursor-pointer"
                  onClick={() => setHamburger((prev) => !prev)}
                />
              ) : (
                <GiHamburgerMenu
                  className="text-xl cursor-pointer"
                  onClick={() => setHamburger((prev) => !prev)}
                />
              )}
            </div>
          </div>
        </div>
        {searchIcon && (
          <div className="md:hidden flex h-full items-center justify-center mx-15 pb-2">
            <input
              type="text"
              className="w-full max-w-[500px] focus:outline-none p-2 pl-6 border-2 bg-white border-white rounded-md placeholder:text-gray-500 text-customBlue font-semibold"
              placeholder="Search items"
            />
          </div>
        )}

      </nav>
      {hamburger && <Sidemenu setHamburger={setHamburger} />}
    </div>
  );
}

export default Header;
