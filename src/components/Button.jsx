import React from "react";


function Button({ label, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition w-full mt-3 cursor-pointer "
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
