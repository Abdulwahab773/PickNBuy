import { useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import 'animate.css';
import Footer from "../../components/Footer";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports"];

  const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      price: 299,
      image: "https://picsum.photos/400/300?1",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Sports",
      price: 79,
      image: "https://picsum.photos/400/300?2",
    },
    {
      id: 3,
      name: "T-Shirt",
      category: "Fashion",
      price: 25,
      image: "https://picsum.photos/400/300?3",
    },
    {
      id: 4,
      name: "Sofa Set",
      category: "Home",
      price: 450,
      image: "https://picsum.photos/400/300?4",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-36  bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl">
        <h2 className="text-5xl font-extrabold drop-shadow-md animate__animated animate__backInDown">
          Welcome to PickNBuy
        </h2>
        <p className="text-lg mt-3 opacity-90">
          Your one-stop shop for everything you need
        </p>
        <div className="max-w-lg mx-auto mt-6">
          <Input placeholder="Search for products..." />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex gap-4 flex-wrap mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition shadow-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-xl font-bold text-indigo-600 mt-2">
                  ${product.price}
                </p>
                <Button label="Add to Cart" onClick={() => {}} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;