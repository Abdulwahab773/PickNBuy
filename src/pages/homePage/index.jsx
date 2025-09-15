import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import "animate.css";
import Footer from "../../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import axios from "axios";

function HomePage() {
  const [checkUser, setCheckUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addToCartProduct, setAddToCartProduct] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckUser(user.uid);
      } else {
        setCheckUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);



  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [
        "All",
        ...new Set(products.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.title
      .toLowerCase()
      .includes(searchProduct.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <Navbar isUser={checkUser} cartItem={addToCartProduct} />

      {loading && <Loader />}

      <div className="text-center py-36 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl">
        <h2 className="text-5xl font-extrabold drop-shadow-md animate__animated animate__backInDown">
          Welcome to PickNBuy
        </h2>
        <p className="text-lg mt-3 opacity-90">
          Your one-stop shop for everything you need
        </p>
        <div className="max-w-lg mx-auto mt-6">
          <Input
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="Search for products..."
            value={searchProduct}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex gap-4 flex-wrap mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-5 py-2 rounded-full border text-sm font-medium transition shadow-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-xl"
                />

                <div className="mt-4">
                  <h3 className="font-bold text-lg text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>

                  <p className="text-xl font-bold text-indigo-600 mt-2">
                    ${product.price}
                  </p>

                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}>
                          {star <= Math.round(product.rating.rate) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                  <Button
                    label="Add to Cart"
                    onClick={() => {
                      setAddToCartProduct((prev) => [
                        ...prev,
                        {
                          name: product.title,
                          imgUrl: product.image,
                          price: product.price,
                          id: product.id
                        },
                      ]);                      
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-700 text-2xl mt-10">
              No products found 🚫
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
