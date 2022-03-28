import React from "react";

const Input = ({ title, label, placeholder, disabled = false, type }) => {
  return (
    <div className="mt-6">
      <label
        className=" mb-2 block text-gray-800 font-bold text-base"
        htmlFor={title}
      >
        {label}
      </label>
      <input
        className="border border-gray-500 outline-none placeholder-gray-400 rounded-sm h-12 w-full px-5 focus:border-primary"
        id={title}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
