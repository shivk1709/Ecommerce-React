import React from "react";
import { useCategory } from "../store/useCategory";
import Products from "./Products";

function Favourites() {
  const { categories, loading, error } = useCategory();
  const selectedCategory = ["Protein", "Pre-Workout", "Creatine"];
  const filteredCategory = categories.filter((category) =>
    selectedCategory.includes(category.name)
  );
  return (
    <Products
      passedCategories={filteredCategory}
      componentName={"FEATURE FAVOURITES"}
    />
  );
}

export default Favourites;
