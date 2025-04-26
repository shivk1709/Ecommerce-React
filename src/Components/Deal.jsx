import React, { useState } from "react";
import { useCategory } from "../store/useCategory";
import ProductItem from "./ProductItem";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";



function Deal() {
  const { categories, loading, error } = useCategory();
  const products = categories[0]?.products ?? [];
  const [showAll, setShowAll] = useState(false);

  const displayedProduct = showAll ? products : products.slice(0, 4);

  return (
    <div className="bg-yellow-100 pb-8">
      <div className="section-container ">
        <div className="pt-8 pb-8">
          <h1 className="text-[15px] lg:text-[1.3vw] font-bold text-customBlack">
            DEAL OF THE WEEK
          </h1>
        </div>
        <div className="flex flex-wrap gap-8">
          {displayedProduct.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-3 ">
        <button className="cursor-pointer md:text-lg text-customBlue font-bold inline-flex border-b-2 border-transparent hover:border-customBlue"
        onClick={() => setShowAll(prev => !prev)}
        >
          View All
          {!showAll ? <FaAngleDoubleDown className="mt-[4px] ml-[4px]" /> : <FaAngleDoubleUp className="mt-[4px] ml-[4px]" />}
        </button>
      </div>
    </div>
  );
}

export default Deal;
