import React, { useRef, useState } from "react";
import { Form } from "react-router-dom";
import Input from "./Input";

function Admin_Dashboard() {
  const [category, setCategory] = useState("");
  const [disableCategory, setDisableCategory] = useState(false);

  const [brand, setBrand] = useState("");
  const [disableBrand, setDisableBrand] = useState(false);

  const [flavour, setFlavour] = useState("");
  const [disableFlavour, setDisableFlavour] = useState(false);

  const [size, setSize] = useState("");
  const [disableSize, setDisableSize] = useState(false);

  const formRef = useRef();

  const handleReset = () => {
    formRef.current.reset();
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSize(value);
    setDisableSize(value === "others");
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    setDisableCategory(value === "others");
  };

  const handleBrandChange = (event) => {
    const value = event.target.value;
    setBrand(value);
    setDisableBrand(value === "others");
  };

  const handleFlavourChange = (event) => {
    const value = event.target.value;
    setFlavour(value);
    setDisableFlavour(value === "others");
  };

  return (
    <div className="flex justify-center p-4 overflow-y-auto min-h-screen bg-white">
      <div className="border border-gray-200 shadow-2xl rounded-xl w-full max-w-4xl p-6">
        <h1 className="font-bold underline text-customBlack text-center text-lg">
          ADMIN PANEL
        </h1>

        <Form
          className="space-y-6 mt-6"
          method="POST"
          encType="multipart/form-data"
          ref={formRef}
        >
          {/* Brand */}
          <div>
            <select
              name="brand"
              value={brand}
              onChange={handleBrandChange}
              disabled={disableBrand}
              className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
            >
              <option value="">Choose Brand</option>
              <option value="mb">MuscleBlaze</option>
              <option value="on">Onn</option>
              <option value="as">As-it-is</option>
              <option value="others">Others</option>
            </select>
            {brand === "others" && disableBrand && (
              <Input
                name="brand"
                type="text"
                setElement={setBrand}
                setDisableElement={setDisableBrand}
              />
            )}
          </div>

          {/* Category */}
          <div>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              disabled={disableCategory}
              className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
            >
              <option value="">Choose Category</option>
              <option value="mb">Peanut Butter</option>
              <option value="on">Protein</option>
              <option value="as">Creatine</option>
              <option value="others">Others</option>
            </select>
            {category === "others" && disableCategory && (
              <Input
                name="category"
                type="text"
                setElement={setCategory}
                setDisableElement={setDisableCategory}
              />
            )}
          </div>

          {/* Product Name */}
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-customBlack font-semibold text-customBlack rounded-sm"
          />

          {/* Flavour */}
          <div>
            <select
              name="flavour"
              value={flavour}
              onChange={handleFlavourChange}
              disabled={disableFlavour}
              className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
            >
              <option value="">Choose Flavour</option>
              <option value="mb">Peanut Butter</option>
              <option value="on">Protein</option>
              <option value="as">Creatine</option>
              <option value="others">Others</option>
            </select>
            {flavour === "others" && disableFlavour && (
              <Input
                name="flavour"
                type="text"
                setElement={setFlavour}
                setDisableElement={setDisableFlavour}
              />
            )}
          </div>

          {/* Price */}
          <input
            type="number"
            min={0}
            placeholder="Enter Product Price"
            name="price"
            className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-customBlack font-semibold text-customBlack rounded-sm"
          />

          {/* Size */}
          <div>
            <select
              name="size"
              value={size}
              onChange={handleSizeChange}
              disabled={disableSize}
              className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
            >
              <option value="">Select Size</option>
              <option value="mb">Peanut Butter</option>
              <option value="on">Protein</option>
              <option value="as">Creatine</option>
              <option value="others">Others</option>
            </select>
            {size === "others" && disableSize && (
              <Input
                name="size"
                type="number"
                setElement={setSize}
                setDisableElement={setDisableSize}
              />
            )}
          </div>

          {/* Stock Quantity */}
          <input
            type="number"
            placeholder="Stock Quantity"
            min={0}
            name="stockquantity"
            className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-customBlack font-semibold text-customBlack rounded-sm"
          />

          {/* File Uploads */}
          <div className="flex flex-wrap gap-4 w-full">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="text-center font-semibold text-xs text-customBlack" htmlFor="">Brand Images</label>
              <input
                type="file"
                multiple
                name="brand_images"
                className="mb-4 border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="text-center font-semibold text-xs text-customBlack" htmlFor="">Category Images</label>
              <input
                type="file"
                multiple
                name="category_images"
                className="mb-4 border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="text-center font-semibold text-xs text-customBlack" htmlFor="">Product Images</label>
              <input
                type="file"
                multiple
                name="product_images"
                className="mb-4 border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="text-xs w-full p-3 bg-customBlue text-white border-white rounded-sm cursor-pointer"
            type="submit"
          >
            Add Product
          </button>
        </Form>
      </div>
    </div>
  );
}

export async function handleAddProduct({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); 
  console.log(postData);
  // const images = formData.getAll("images");
  // const category = formData.getAll("category");
  // const brand = formData.getAll("brand");
  // console.log(images, category, brand);
}

export default Admin_Dashboard;
