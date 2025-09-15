import { useEffect, useState } from "react";
import Button from "./Button";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

function Cart({ isOpen, onClose, userUid, itemAdded }) {
  const [products, setProducts] = useState([]);
  const [itemSent, setItemSent] = useState(0);

  useEffect(() => {
    if (!userUid) return;

    const q = query(collection(db, "orderItems"), where("uid", "==", userUid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProducts(items);
    });

    return () => unsubscribe();
  }, [userUid, itemAdded]);

  const removeFromBackend = async (productId) => {
    try {
      // Query karo jis product ko remove karna hai
      const q = query(
        collection(db, "orderItems"),
        where("uid", "==", userUid),
        where("id", "==", productId)
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "orderItems", document.id));
        console.log("Deleted:", document.id);
      });

      alert("Item removed from cart 🗑️");
      setItemSent((prev) => prev + 1);
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm "
        onClick={onClose}
      ></div>

      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl rounded-l-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800 mt-2">
            Your Cart 🛒
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-3xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Cart Items (dummy for now) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {products.map((prod) => {
            return (
              <div
                key={prod.id}
                className="flex items-center gap-3 border-b pb-3"
              >
                <img
                  src={prod.imgUrl}
                  alt={prod.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-800">
                    {prod.name}
                  </h3>
                </div>

                <span className="text-gray-800 font-semibold">
                  ${prod.price}
                </span>

                <button
                  onClick={() => {
                    setProducts((prev) => prev.filter((p) => p.id !== prod.id));
                    removeFromBackend(prod.id);
                  }}
                  className="ml-3 text-red-500 hover:text-red-700 font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between text-gray-800 font-medium">
            <span>Total:</span>
            <span> ${products.reduce((acc, prod) => acc + prod.price, 0)}</span>
          </div>
          <Button label={"Checkout"} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
