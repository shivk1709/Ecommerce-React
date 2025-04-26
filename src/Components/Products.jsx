import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useCategory } from "../store/useCategory";
import ProductItem from "./ProductItem";
import { FaGreaterThan } from "react-icons/fa6";
import useHorizontalScroll from "../store/useHorizontalScroll ";

function Products({passedCategories, componentName}) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { categories : fetchedCategories, loading, error } = useCategory();

  const categories = passedCategories || fetchedCategories;
  const pageName = componentName || 'BESTSELLERS';
  const {
    isAtStart,
    isAtEnd,
    scrollRef,
    handleScroll,
    scrollLeftFunc,
    scrollRightFunc,
  } = useHorizontalScroll(1000);

  useEffect(() => {
    if (scrollRef.current) {
      handleScroll();
    }
  }, [categories, selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  return (
    <div>
      <div className="section-container">
        <h1 className="section-heading">
          {pageName}
        </h1>

        {/* Category Buttons */}
        <div
          className="flex flex-row-reverse space-x-reverse md:gap-14 gap-5 mt-3 overflow-x-auto whitespace-nowrap hide-scrollbar"
          dir="rtl"
        >
          {categories.slice(0, 5).map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`inline-block font-semibold md:text-lg text-md ${
                selectedCategory === index
                  ? "text-red-700 border-b-2 border-red-700"
                  : "text-customBlack"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:mx-24 mx-8 md:relative">
        {/* Right Scroll Button */}
        {!isAtEnd && (
          <button
            onClick={scrollRightFunc}
            disabled={isAtEnd}
            className={`md:block hidden absolute top-[7vw] right-0 z-10 cursor-pointer px-4 py-12 bg-gray-100 border border-customBlack shadow-2xl text-customBlack transition-opacity ${
              isAtEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            <FaChevronRight className="text-3xl" />
          </button>
        )}

        {/* Left Scroll Button */}
        {!isAtStart && (
          <button
            onClick={scrollLeftFunc}
            disabled={isAtStart}
            className={`md:block hidden absolute top-[8vw] left-3 z-10 cursor-pointer px-4 py-12 bg-gray-100 border border-customBlack shadow-2xl text-customBlack transition-opacity ${
              isAtStart ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            <FaChevronLeft className="text-3xl" />
          </button>
        )}

        {/* Products Scrollable Container */}
        <div
          className="mt-4 overflow-x-auto scroll-smooth hide-scrollbar"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="flex md:space-x-4 w-max min-w-full ">
            {categories[selectedCategory]?.products
              .slice(0, 7)
              .map((product) => (
                <div className="min-w-[250px] " key={product.id}>
                  <ProductItem product={product} />
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-3 ">
          <button className="cursor-pointer md:text-lg text-customBlue font-bold inline-flex border-b-2 border-transparent hover:border-customBlue">
            View All
            <FaGreaterThan className="mt-1.5 ml-0.5" />
            <FaGreaterThan className="mt-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
