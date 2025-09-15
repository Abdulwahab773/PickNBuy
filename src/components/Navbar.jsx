import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import CartButton from "./CartButton";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ isUser, itemAdded }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  
  const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Sign Out Error", error);
    }
  }


  return (
    <nav className="fixed 0 w-full bg-white shadow-xl z-50">
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
              <CartButton onClick={() => setIsCartOpen(true)} itemCount={3}  />

              <button
                onClick={logoutUser}
                className=" cursor-pointer  flex items-center gap-2 bg-gradient-to-r bg-red-600 hover:from-red-700 hover:to-red-500 text-white p-2.5 rounded-full shadow-lg transition-all duration-300"
              >
                <LuLogOut size={20} />
                Logout
              </button>
            </>
          )}
        </ul>
      </div>

      {/* <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartProduct={cartItem} /> */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} userUid={isUser} itemAdded={itemAdded} />
    </nav>
  );
};

export default Navbar;
