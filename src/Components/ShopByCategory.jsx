import React from "react";
import { useCategory } from "../store/useCategory";
import image from "../assets/images.jpeg";

function ShopByCategory() {
  const bgColors = [
    "bg-red-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-yellow-50",
    "bg-purple-50",
    "bg-pink-50",
    "bg-indigo-50",
    "bg-orange-50",
    "bg-lime-50",
    "bg-teal-50",
  ];

  // const { categories, loading, error } = useCategory();

  // const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div>
      {/* <div className="section-container">
        <h1 className="section-heading">
          SHOP BY CATEGORY
        </h1>
        <div className="">
          <div className="flex flex-wrap gap-5 mt-3  justify-start">
            {categories.map((category, index) => 
            <div key={index} className="flex flex-col cursor-pointer p-2 w-[25vw] max-w-[230px] rounded-lg bg-gray-50 hover:shadow-2xl border-1 border-gray-300">
              <img
                src="https://www.bigmusclesnutrition.com/cdn/shop/files/Nitric-Whey-pdp-10.jpg?v=1719643056"
                className="w-[23vw] max-w-[200px] object-cover rounded-lg"
                alt="iamgez"
              />
              <p className="text-center text-customBlack font-semibold">
                {category.name}
              </p>
              <p className="text-center text-customBlack   text-sm font-bold">
                UPTO 70% OFF
              </p>
            </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShopByCategory;
