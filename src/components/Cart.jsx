import Button  from "./Button";

function Cart({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl rounded-l-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800 mt-2">Your Cart 🛒</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-3xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Cart Items (dummy for now) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/60"
              alt="Product"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">
                Product Name
              </h3>
              <p className="text-sm text-gray-500">$20 x 1</p>
            </div>
            <span className="text-gray-800 font-semibold">$20</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between text-gray-800 font-medium">
            <span>Total:</span>
            <span>$20</span>
          </div>
          <Button label={"Checkout"}/>
        </div>
      </div>
    </div>
  );
}

export default Cart;
