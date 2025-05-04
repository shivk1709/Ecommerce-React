import React, { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { saveBrands } from "../store/BrandSlice";
import { uploadImage } from "../store/Cluadinary";
import { useBrands } from "../store/useBrands";
import Notification from "./Notification";

function Admin_Dashboard() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [disableCategory, setDisableCategory] = useState(false);

  const { brands, loading, error, successfulOnSave } = useBrands();

  const [brand, setBrand] = useState("");
  const [disableBrand, setDisableBrand] = useState(false);

  const [flavour, setFlavour] = useState("");
  const [disableFlavour, setDisableFlavour] = useState(false);

  const [weight, setWeight] = useState("");
  const [disableWeight, setDisableWeight] = useState(false);

  const [weightUnit, setWeightUnit] = useState("");
  const [disableWeightUnit, setDisableWeightUnit] = useState(false);

  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.success) {
      dispatch(saveBrands(actionData.brandWithProduct));
    }
  }, [actionData, dispatch]);
  
  const [showNotification, setShowNotification] = useState(false);
  const [notificationConfig, setNotificationConfig] = useState({
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (successfulOnSave) {
      setNotificationConfig({
        message: "Saved successfully!",
        type: "success",
      });
      setShowNotification(true);
    } else if (error) {
      console.error(error.message);
      setNotificationConfig({
        message: error.message || "Something went wrong!",
        type: "error",
      });
      setShowNotification(true);
    }

    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [successfulOnSave, error]);

  return (
    <>
      <div className="flex justify-center p-4 overflow-y-auto min-h-screen bg-white">
        {showNotification && (
          <Notification
            message={notificationConfig.message}
            type={notificationConfig.type}
            onClose={() => setShowNotification(false)}
          />
        )}
        <div className="border border-gray-200 shadow-2xl rounded-xl w-full max-w-4xl p-6">
          <h1 className="font-bold underline text-customBlack text-center text-lg">
            ADMIN PANEL
          </h1>

          <Form
            method="POST"
            encType="multipart/form-data"
            className="space-y-6 mt-6"
          >
            {/* Brand */}
            <div>
              <select
                name="brand"
                value={brand}
                onChange={(e) => {
                  const value = e.target.value;
                  setBrand(value);
                  setDisableBrand(value === "others");
                }}
                disabled={disableBrand}
                className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
              >
                <option value="">Choose Brand</option>
                <option value="MuscleBlaze">MuscleBlaze</option>
                <option value="Optimum Nutrition">Onn</option>
                <option value="As-It-Is">As-it-is</option>
                <option value="Avvatar">Avvatar</option>
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
                name="categories"
                value={category}
                onChange={(e) => {
                  const value = e.target.value;
                  setCategory(value);
                  setDisableCategory(value === "others");
                }}
                disabled={disableCategory}
                className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
              >
                <option value="">Choose Category</option>
                <option value="Peanut-Butter">Peanut Butter</option>
                <option value="Protein">Protein</option>
                <option value="Creatine">Creatine</option>
                <option value="others">Others</option>
              </select>
              {category === "others" && disableCategory && (
                <Input
                  name="categories"
                  type="text"
                  setElement={setCategory}
                  setDisableElement={setDisableCategory}
                />
              )}
            </div>

            {/* Category Description */}
            <input
              type="text"
              placeholder="Enter Category Description"
              name="categoryDescription"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* Product Name */}
            <input
              type="text"
              placeholder="Enter Product Name"
              name="name"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* Product Description */}
            <input
              type="text"
              placeholder="Enter Product Descripton"
              name="productDescription"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* Flavour */}
            <div>
              <select
                name="flavour"
                value={flavour}
                onChange={(e) => {
                  const value = e.target.value;
                  setFlavour(value);
                  setDisableFlavour(value === "others");
                }}
                disabled={disableFlavour}
                className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
              >
                <option value="">Choose Flavour</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Kesar-Badam">Kesar-Badam</option>
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

            {/* MRP */}
            <input
              type="number"
              min={0}
              placeholder="Enter MRP Price"
              name="mrp"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* Price */}
            <input
              type="number"
              min={0}
              placeholder="Enter Product Price"
              name="price"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* Size */}
            <div className="flex space-x-2">
              <div className="w-1/2">
                <select
                  name="weight"
                  value={weight}
                  onChange={(e) => {
                    const value = e.target.value;
                    setWeight(value);
                    setDisableWeight(value === "others");
                  }}
                  disabled={disableWeight}
                  className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
                >
                  <option value="">Select Weight</option>
                  <option value="2.50">2.5</option>
                  <option value="1.00">1</option>
                  <option value="4.00">4</option>
                  <option value="others">Others</option>
                </select>
                {weight === "others" && disableWeight && (
                  <Input
                    name="weight"
                    step="0.01"
                    type="number"
                    setElement={setWeight}
                    setDisableElement={setDisableWeight}
                  />
                )}
              </div>
              <div className="w-1/2">
                <select
                  name="weightUnit"
                  value={weightUnit}
                  onChange={(e) => {
                    const value = e.target.value;
                    setWeightUnit(value);
                    setDisableWeightUnit(value === "others");
                  }}
                  disabled={disableWeightUnit}
                  className="focus:outline-none bg-gray-100 p-3 text-xs font-semibold text-customBlack w-full disabled:text-gray-400"
                >
                  <option value="">Select WeightUnit</option>
                  <option value="KG">KG</option>
                  <option value="GM">GM</option>
                  <option value="MG">MG</option>
                  <option value="others">Others</option>
                </select>
                {weightUnit === "others" && disableWeightUnit && (
                  <Input
                    name="weightUnit"
                    type="text"
                    setElement={setWeightUnit}
                    setDisableElement={setDisableWeightUnit}
                  />
                )}
              </div>
            </div>

            {/* Stock Quantity */}
            <input
              type="number"
              min={0}
              placeholder="Enter Stock Quantity"
              name="stockquantity"
              className="w-full border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs placeholder:text-gray-400 font-semibold text-customBlack rounded-sm"
            />

            {/* File Uploads */}
            <div className="flex flex-wrap gap-4 w-full">
              <div className="flex flex-col flex-1 min-w-[200px]">
                <label className="text-center font-semibold text-xs text-customBlack">
                  Brand Images
                </label>
                <input
                  type="file"
                  multiple
                  name="brand_images"
                  className="mb-4 border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-[200px]">
                <label className="text-center font-semibold text-xs text-customBlack">
                  Category Images
                </label>
                <input
                  type="file"
                  multiple
                  name="category_images"
                  className="mb-4 border border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-[200px]">
                <label className="text-center font-semibold text-xs text-customBlack">
                  Product Images
                </label>
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
              type="submit"
              className="text-xs w-full p-3 bg-customBlue text-white border-white rounded-sm cursor-pointer"
            >
              Add Product
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export async function handleAddProduct({ request }) {
  const formData = await request.formData();
  const brandImages = formData.getAll("brand_images");
  const categoryImages = formData.getAll("category_images");
  const productImages = formData.getAll("product_images");
  const data = Object.fromEntries(formData);

  // Process all images first (await all promises)
  const [brandImageUrls, categoryImageUrls, productImageUrls] =
    await Promise.all([
      uploadImage(brandImages),
      uploadImage(categoryImages),
      uploadImage(productImages),
    ]);

  const brandWithProduct = {
    name: data.brand,
    imageUrl: brandImageUrls,
    categories: [
      {
        name: data.brand + " " + data.categories,
        description: data.categoryDescription,
        imageUrl: categoryImageUrls,
        products: [
          {
            name: data.name,
            description: data.productDescription,
            price: data.price,
            imageUrl: productImageUrls,
            stockQuantity: data.stockquantity,
            flavour: data.flavour,
            weight: data.weight,
            weightUnit: data.weightUnit,
            mrp: data.mrp,
          },
        ],
      },
    ],
  };

  return { success: true, brandWithProduct };
}

export default Admin_Dashboard;
