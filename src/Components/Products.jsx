import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import ProductItem from "./ProductItem";
import useHorizontalScroll from "../store/useHorizontalScroll";
import { useBrands } from "../store/useBrands";

function Products({ componentName }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { brands, loading, error } = useBrands();
  
  const {
    isAtStart,
    isAtEnd,
    scrollRef,
    handleScroll,
    scrollLeftFunc,
    scrollRightFunc,
  } = useHorizontalScroll(1000);

  // Get all categories from all brands
  const allCategories = brands.flatMap(brand => 
    (brand.categories || []).map(category => ({
      ...category,
      name: category.name.replace(brand.name + ' ', '')
    }))
  );
    const currentProducts = allCategories[selectedCategory]?.products || [];

  useEffect(() => {
    if (scrollRef.current) {
      handleScroll();
    }
  }, [selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (allCategories.length === 0) return <p>No categories available</p>;

  return (
    <div>
      <div className="section-container">
        <h1 className="section-heading">{componentName || "BESTSELLERS"}</h1>
        
        {/* Category Selection */}
        <div className="flex gap-3 mt-3 overflow-x-auto hide-scrollbar">
          {allCategories.slice(0, 5).map((category, index) => (
            <button
              key={`${category.id}-${index}`}
              onClick={() => setSelectedCategory(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                selectedCategory === index
                  ? "bg-red-100 text-red-700 font-bold"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Display */}
      <div className="lg:mx-24 mx-8 md:relative">
        {/* Scroll buttons */}
        {!isAtEnd && (
          <button
            onClick={scrollRightFunc}
            className="md:block hidden absolute top-[50%] right-0 z-10 px-3 py-10 bg-white border border-gray-200 shadow-md hover:bg-gray-50"
          >
            <FaChevronRight className="text-xl" />
          </button>
        )}

        {!isAtStart && (
          <button
            onClick={scrollLeftFunc}
            className="md:block hidden absolute top-[50%] left-0 z-10 px-3 py-10 bg-white border border-gray-200 shadow-md hover:bg-gray-50"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        )}

        {/* Products List */}
        <div
          className="mt-6 overflow-x-auto hide-scrollbar scroll-smooth"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="flex gap-6 w-max min-w-full">
            {currentProducts.slice(0, 7).map((product) => (
              <div key={product.id} className="min-w-[250px]">
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        {currentProducts.length > 7 && (
          <div className="flex justify-center mt-6">
            <button className="flex items-center text-blue-600 font-semibold hover:underline">
              View All
              <FaGreaterThan className="ml-1 text-xs" />
              <FaGreaterThan className="ml-0.5 text-xs" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;