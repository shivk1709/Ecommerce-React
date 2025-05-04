import React from "react";
import { GiCancel } from "react-icons/gi";

function Input({ name, setElement, setDisableElement, type = "text", step }) {
  const handleChange = (e) => {
    setElement(e.target.value);
  };

  const handleCancelButton = () => {
    setDisableElement(false);
    setElement("");
  };

  return (
    <div className="w-full relative">
      <input
        name={name}
        type={type}
        min={type === "number" ? 0 : undefined}
        value={undefined} // Optional: Controlled input
        placeholder={`Enter ${name}`}
        // onChange={handleChange}
        required
        className="w-full mt-4 border placeholder:text-gray-400 border-gray-200 bg-gray-100 focus:outline-none p-3 text-xs font-semibold text-customBlack rounded-sm pr-8"
      />
      <GiCancel
        className="absolute right-3 top-9 -translate-y-1/2 text-gray-400 cursor-pointer"
        onClick={handleCancelButton}
      />
    </div>
  );
}

export default Input;
