import React from "react";
import { FaStar } from "react-icons/fa";

function ProductItem({ product }) {
  return (
    <div className="">
      <div className="lg:w-[330px] md:w-64 w-52 shrink-0 cursor-grab hover:shadow-2xl ">
        <div className="border-2 hover:border-2 border-gray-200 hover:border-gray-300 p-2 rounded-lg mb-2 ">
          <div className="flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/81aaWp4pwgL.jpg"
              className="p-4 w-64 h-auto bg-cover"
              alt=""
            />
          </div>
          <span className="inline-flex space-x-0.5 bg-amber-200 rounded-lg p-1 mb-2">
            <FaStar className="text-yellow-600 text-lg md:text-xl" />
            <span className="font-semibold text-sm md:text-md">3.5(90)</span>
          </span>
          <p className="font-bold  md:text-lg text-sm break-words line-clamp-2 h-[40px] md:h-[54px] lg:h-[56px]">
            {product.id % 2 === 0
              ? product.name
              : "MuscleTech Nitrosb ddddddddddd ddddd dddddd sdffffffffffffffffffffffffffff sdfsdd"}
          </p>
          <h1 className="text-sm">
            {product.flavour} | {product.weight} Lbs
          </h1>
          <div className="flex items-center space-x-2 my-1">
            <span className="text-customBlack font-bold text-md">
              {product.price}
            </span>
            <span className="text-gray-500 line-through text-sm">
              {product.mrp}
            </span>
            <span className="text-[9px] font-bold border border-green-800 bg-green-200 rounded p-[2px]">
              {product.percentage}% OFF
            </span>
          </div>
          <button className="w-full p-2 text-white bg-yellow-600 font-bold rounded-lg my-2 cursor-pointer">
            Choose Options
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
