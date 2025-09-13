import React from "react";

function Input({ placeholder, onChange, type = "text" , value}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 px-5 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
      onChange={onChange}
      value={value}
      required
    />
  );
}
export default Input;
