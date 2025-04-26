import React from "react";
import { useCategory } from "../store/useCategory";

function Categories() {

  const {categories, loading, error} = useCategory();

  return (
    <div>
      {/* <div className="lg:mx-24 mx-8 mt-2 hide-scrollbar">
        <h1 className="text-[3vw] lg:text-[1.3vw] font-bold text-customBlack">
          BESTSELLERS
        </h1>

        <div
          className="flex flex-row-reverse space-x-reverse  space-x-15 mt-3 overflow-x-auto whitespace-nowrap hide-scrollbar"
          dir="rtl"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="inline-block font-semibold text-lg text-customBlack border-red-600 cursor-pointer"
            >
              {category.name}
            </button>
          ))}
        </div>

      </div> */}
    </div>
  );
}

export default Categories;
