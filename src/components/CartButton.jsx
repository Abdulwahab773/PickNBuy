import { FaShoppingCart } from "react-icons/fa";

export default function CartButton({ onClick, itemCount = 0 }) {
  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer  flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
    >
      <FaShoppingCart className="w-5 h-5" />

      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate__animated animate__rollIn">
          {itemCount}
        </span>
      )}
    </button>
  );
}
