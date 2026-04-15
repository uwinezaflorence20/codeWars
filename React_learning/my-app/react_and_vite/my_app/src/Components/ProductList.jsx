import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  // ✅ Data
  const products = [
    {
      product_id: 1,
      product_name: "Laptop",
      price: 1200,
      description: "High-performance laptop with 16GB RAM and 512GB SSD.",
    },
    {
      product_id: 2,
      product_name: "Smartphone",
      price: 800,
      description: "Latest smartphone with OLED display and 5G connectivity.",
    },
    {
      product_id: 3,
      product_name: "Headphones",
      price: 150,
      description: "Noise-cancelling wireless headphones with long battery life.",
    },
    {
      product_id: 4,
      product_name: "Keyboard",
      price: 60,
      description: "Mechanical keyboard with customizable RGB lighting.",
    },
    {
      product_id: 5,
      product_name: "Mouse",
      price: 40,
      description: "Wireless ergonomic mouse with adjustable DPI.",
    },
    {
      product_id: 6,
      product_name: "Monitor",
      price: 300,
      description: "27-inch 4K UHD monitor with HDR support.",
    },
    {
      product_id: 7,
      product_name: "Printer",
      price: 200,
      description: "All-in-one inkjet printer with wireless printing.",
    },
    {
      product_id: 8,
      product_name: "Tablet",
      price: 500,
      description: "10-inch tablet with stylus support and 128GB storage.",
    },
    {
      product_id: 9,
      product_name: "Smartwatch",
      price: 250,
      description: "Water-resistant smartwatch with fitness tracking features.",
    },
    {
      product_id: 10,
      product_name: "External Hard Drive",
      price: 100,
      description: "1TB portable hard drive with USB 3.0 connectivity.",
    },
  ];

  // ✅ Filter logic
  const filteredProducts = products.filter((product) => {
    const search = query.toLowerCase();
    return (
      product.product_name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Product Search
      </h1>

      {/* ✅ Input FIXED */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or description..."
        className="w-full p-3 mb-6 border-2 border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />

      {/* Product List */}
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li
              key={product.product_id}
              className="mb-4 p-4 bg-white rounded-lg shadow"
            >
              <strong className="text-lg text-gray-900">
                {product.product_name}
              </strong>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-semibold">
                ${product.price}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;