import { useState } from "react";
 
const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
 
  // Derive filtered list — no extra state needed
  const filteredProducts = products.filter((product) => {
    const search = query.toLowerCase();
    return (
      product.product_name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });
 
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name or description..."
        className="w-full p-3 mb-6 border-2 border-gray-300 rounded-lg"
      />
 
      {/* Product List — uses filteredProducts, not products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.product_name}</strong>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;