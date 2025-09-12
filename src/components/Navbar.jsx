import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import CartButton from "./CartButton";
import { LuLogOut } from "react-icons/lu";

const Navbar = ({ isUser }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl cursor-pointer font-bold text-indigo-600 transform hover:scale-105 duration-200">
          PickNBuy
        </h1>
        <ul className="flex gap-6 text-gray-600 font-semibold items-center">
          <Link to={"/"} className="hover:text-indigo-600 cursor-pointer">
            Home
          </Link>

          <Link
            to={"/contact"}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </Link>

          {!isUser ? (
            <Link
              to={"/login"}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <>
            <CartButton onClick={() => setIsCartOpen(true)} itemCount={3} />
            <LuLogOut />
            </>
          )}

        </ul>
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
