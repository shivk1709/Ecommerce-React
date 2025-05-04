import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { MdLocalOffer } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaGreaterThan, FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidemenu({ setHamburger }) {
  const [searchIcon, setSearchIcon] = useState(false);

  const categories = [
    { label: "Brands", path: "" },
    { label: "Admin Dashboard ", path: "/admin" },
    { label: "Sports Nutrition", path: "" },
    { label: "Vitamins & Supplements", path: "" },
    { label: "Health Foods & Drinks", path: "" },
    { label: "Fitness Accessories & Equipments", path: "" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform translate-x-0">
      {/* Header */}
      <nav className="bg-customBlue text-white">
        <div className="flex items-center justify-between mx-[5vw] p-3 md:p-4">
          {/* Logo */}
          <div className="cursor-pointer">
            <img
              src="https://dailypunchnutrition.com/images/logo.png"
              className="w-[20vw] md:w-[10vw] h-auto p-1"
              alt="Logo"
            />
          </div>

          {/* Search Input Desktop */}
          <div className="md:block hidden">
            <input
              type="text"
              placeholder="Hello Doston"
              className="focus:outline-none border border-gray-300 rounded-sm w-[32vw] py-2 px-4 bg-white placeholder:text-gray-500 text-customBlue font-semibold"
            />
          </div>

          {/* Right Icons */}
          <div>
            <ul className="md:flex hidden space-x-10">
              <li className="font-bold inline-flex text-[1.3vw] cursor-pointer">
                <FaUserCircle className="mt-[0.37vw] mr-2" /> Login/Signup
              </li>
              <li className="font-bold inline-flex text-[1.3vw] cursor-pointer border-red-600 rounded-sm">
                <FaShoppingCart className="mt-[0.37vw] mr-2" /> Cart
              </li>
            </ul>

            {/* Mobile Icons */}
            <div className="md:hidden flex space-x-6">
              <FaMagnifyingGlass
                className="text-xl cursor-pointer hover:scale-110 transition"
                onClick={() => setSearchIcon((prev) => !prev)}
              />
              <IoClose
                className="text-xl cursor-pointer hover:rotate-90 transition"
                onClick={() => setHamburger((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {/* Search Input Mobile */}
        {searchIcon && (
          <div className="md:hidden flex h-full items-center justify-center mx-15 pb-2 animate-fade-in">
            <input
              type="text"
              className="w-full max-w-[500px] focus:outline-none p-2 pl-6 border-2 bg-white border-white rounded-md placeholder:text-gray-500 text-customBlue font-semibold"
              placeholder="Search items"
            />
          </div>
        )}
      </nav>

      {/* Sidebar Content */}
      <div className="w-full h-screen bg-customBlue md:bg-white overflow-y-auto">
        {/* Grid Icons Mobile */}
        <div className="md:hidden border-t-2 border-white text-white">
          <div className="flex mx-[2vw] mt-2 justify-center flex-wrap gap-[2vw]">
            {[
              { icon: <FaUserCircle />, label: "My Account" },
              { icon: <HiShoppingBag />, label: "Orders" },
              { icon: <SlBadge />, label: "Authentic" },
              { icon: <MdLocalOffer />, label: "Offers" },
              { icon: <TfiHeadphoneAlt />, label: "Support" },
              { icon: <FaUserCircle />, label: "More" },
            ].map(({ icon, label }, idx) => (
              <div
                key={idx}
                className="h-[22vw] w-[35vw] border-2 flex flex-col space-y-1.5 items-center justify-center border-gray-300 text-white cursor-pointer transition transform hover:scale-105 active:scale-95"
              >
                <div className="text-3xl">{icon}</div>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>

          {/* Menu Links */}
          {categories.map((item, idx) => (
            <Link to={item.path} key={idx}>
              <div
                key={idx}
                className="mx-[2.2vw] py-[3.5vw] cursor-pointer font-bold flex items-center justify-between border-b border-gray-300 hover:bg-white hover:text-customBlue transition duration-200"
                onClick={() => setHamburger((prev) => !prev)}
              >
                <h2>{item.label}</h2>
                <FaGreaterThan />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
