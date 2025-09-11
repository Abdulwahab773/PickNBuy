import React from "react";


const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl cursor-pointer font-bold text-indigo-600 transform hover:scale-105 duration-200">PickNBuy</h1>
        <ul className="flex gap-6 text-gray-600 font-semibold">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Login</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
