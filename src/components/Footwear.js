import React, { useState } from "react";
import "./components.css";

const Footwear = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      url: "https://tse1.mm.bing.net/th?id=OIP.WSnt_dpT0mxbOgLFWLZmQgHaFO&pid=Api&P=0&h=180",
      title: "Men's Casual Sneakers",
      price: 34.99,
    },
    {
      id: 2,
      url: "https://tse2.mm.bing.net/th?id=OIP.xb_d85eYMV97LDssGkw6OgHaGY&pid=Api&P=0&h=180",
      title: "Women's Striped Sandals",
      price: 27.99,
    },
    {
      id: 3,
      url: "https://tse2.explicit.bing.net/th?id=OIP.4neaWk26bzkCwcpVY9jPKAHaIA&pid=Api&P=0&h=180",
      title: "Men's Leather Dress Shoes",
      price: 39.99,
    },
    {
      id: 4,
      url: "https://tse4.mm.bing.net/th?id=OIP.Ow-RhNKbOmvsik886iFdTAHaEH&pid=Api&P=0&h=180",
      title: "Women's High Heel Boots",
      price: 36.99,
    },
    {
      id: 5,
      url: "https://tse2.mm.bing.net/th?id=OIP.Z7UCVzNIOFPJ7dSEosNOEQHaHa&pid=Api&P=0&h=180",
      title: "Men's Athletic Shoes",
      price: 29.99,
    },
    {
      id: 6,
      url: "https://tse1.mm.bing.net/th?id=OIP.3ZTj8J5zRp5WytBjIQfTsgHaEc&pid=Api&P=0&h=180",
      title: "Women's Casual Loafers",
      price: 49.99,
    },
    {
      id: 7,
      url: "https://tse1.mm.bing.net/th?id=OIP.-vIzozxECYaQBv3RU8sZYAHaEc&pid=Api&P=0&h=180",
      title: "Men's Red Running Shoes",
      price: 31.99,
    },
    {
      id: 8,
      url: "https://tse1.mm.bing.net/th?id=OIP.etYA2CBhXuc4gRzvf8hhrQHaHa&pid=Api&P=0&h=180",
      title: "Women's Striped Espadrilles",
      price: 36.99,
    },
    {
      id: 9,
      url: "https://tse3.mm.bing.net/th?id=OIP.Ld3PorjrsqcgVpqYmKDWKQHaLH&pid=Api&P=0&h=180",
      title: "Men's Black Leather Boots",
      price: 24.99,
    },
  ]);

  const [sortBy, setSortBy] = useState(""); // State to store current sorting option

  // Function to handle sorting by price
  const handleSortByPrice = (event) => {
    const option = event.target.value;

    if (option === "lowToHigh") {
      products.sort((a, b) => a.price - b.price);
    } else if (option === "highToLow") {
      products.sort((a, b) => b.price - a.price);
    }

    setSortBy(option);
    setProducts([...products]); // Trigger re-render
  };

  return (
    <div className="footwear">
      <h2>foot wear Page</h2>

      {/* Sorting options */}
      <div className="sort-options">
        <label>Sort by Price:</label>
        <select value={sortBy} onChange={handleSortByPrice}>
          <option value="default">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Display products */}
      <div className="image-grid">
        {products.map((product) => (
          <div key={product.id} className="image-item">
            <img src={product.url} alt={product.title} />
            <p>{product.title}</p>
            <p>{"$" + product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footwear;
